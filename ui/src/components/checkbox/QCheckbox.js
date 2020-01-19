import Vue from 'vue'

import CheckboxMixin from '../../mixins/checkbox.js'

export default Vue.extend({
  name: 'QCheckbox',

  mixins: [ CheckboxMixin ],

  methods: {
    __getInner (h) {
      return [
        h('div', {
          staticClass: 'q-checkbox__bg absolute'
        }, [
          h('svg', {
            staticClass: 'q-checkbox__check fit absolute-full',
            attrs: { focusable: 'false' /* needed for IE11 */, viewBox: '0 0 24 24' }
          }, [
            h('path', {
              staticClass: 'q-checkbox__check-det',
              attrs: {
                fill: 'none',
                d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
              }
            }),
  
            h('path', {
              staticClass: 'q-checkbox__check-indet',
              attrs: {
                d: 'M4,14H20V10H4'
              }
            })
          ])
        ])
      ]
    }
  },

  created () {
    this.type = 'checkbox'
  }
})
