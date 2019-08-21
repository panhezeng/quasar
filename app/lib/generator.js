const
  fs = require('fs'),
  path = require('path'),
  compileTemplate = require('lodash.template')

const
  log = require('./helpers/logger')('app:generator')
  appPaths = require('./app-paths'),
  quasarFolder = appPaths.resolve.app('.quasar')

class Generator {
  constructor (quasarConfig) {
    const { ctx, preFetch, ...cfg } = quasarConfig.getBuildConfig()

    this.alreadyGenerated = false
    this.quasarConfig = quasarConfig

    const paths = [
      'app.js',
      'client-entry.js',
      'import-quasar.js'
    ]

    this.files = []

    if (preFetch) {
      paths.push('client-prefetch.js')
    }
    if (ctx.mode.ssr) {
      paths.push('server-entry.js')
    }
    if (ctx.mode.tauri) {
      const { injector, apiTemplatePath } = require('@quasar/tauri')
      this.files.push({
        filename: 'tauri.js',
        dest: path.join(quasarFolder, 'tauri.js'),
        template: compileTemplate(fs.readFileSync(apiTemplatePath))
      })

      const TauriInjector = injector,
        tauriInjectorInstance = new TauriInjector(),
        tauriConfigFolder = tauriInjectorInstance.configDir()

      const {bundle, ...tauriCfg} = cfg.tauri
      this.files = this.files.concat([{
        filename: 'config.json',
        dest: path.join(tauriConfigFolder, 'config.json'),
        template: compileTemplate(JSON.stringify(tauriCfg))
      }, {
        filename: 'bundle.json',
          dest: path.join(tauriConfigFolder, 'bundle.json'),
          template: compileTemplate(JSON.stringify(bundle === false ? {} : bundle))
      }])
    }

    this.files = this.files.concat(paths.map(file => {
      const
        content = fs.readFileSync(
          appPaths.resolve.cli(`templates/entry/${file}`),
          'utf-8'
        ),
        filename = path.basename(file)

      return {
        filename,
        dest: path.join(quasarFolder, filename),
        template: compileTemplate(content)
      }
    }))
  }

  build () {
    log(`Generating Webpack entry point`)
    const data = this.quasarConfig.getBuildConfig()

    // ensure .quasar folder
    if (!fs.existsSync(quasarFolder)) {
      fs.mkdirSync(quasarFolder)
    }

    this.files.forEach(file => {
      fs.writeFileSync(file.dest, file.template(data), 'utf-8')
    })

    if (!this.alreadyGenerated) {
      const then = Date.now() / 1000 - 120

      this.files.forEach(file => {
        fs.utimes(file.dest, then, then, function (err) { if (err) throw err })
      })

      this.alreadyGenerated = true
    }
  }
}

module.exports = Generator
