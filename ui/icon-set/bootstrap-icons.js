// there are some icons that are needed but not available
// so we import them from MDI as svgs

import {
  mdiFormatSubscript,
  mdiFormatSuperscript,
} from '@quasar/extras/mdi-v6'

export default {
  name: 'bootstrap-icons',
  type: {
    positive: 'bi-check',
    negative: 'bi-exclamation-triangle-fill',
    info: 'bi-exclamation-circle-fill',
    warning: 'bi-exclamation'
  },
  arrow: {
    up: 'bi-arrow-up',
    right: 'bi-arrow-right',
    down: 'bi-arrow-down',
    left: 'bi-arrow-left',
    dropdown: 'bi-caret-down-fill'
  },
  chevron: {
    left: 'bi-chevron-left',
    right: 'bi-chevron-right'
  },
  colorPicker: {
    spectrum: 'bi-eyedropper',
    tune: 'bi-sliders',
    palette: 'bi-palette2'
  },
  pullToRefresh: {
    icon: 'bi-arrow-repeat'
  },
  carousel: {
    left: 'bi-chevron-left',
    right: 'bi-chevron-right',
    up: 'bi-chevron-up',
    down: 'bi-chevron-down',
    navigationIcon: 'bi-circle-fill'
  },
  chip: {
    remove: 'bi-x-circle-fill',
    selected: 'bi-check'
  },
  datetime: {
    arrowLeft: 'bi-chevron-left',
    arrowRight: 'bi-chevron-right',
    now: 'bi-clock-fill',
    today: 'bi-calendar-check-fill'
  },
  editor: {
    bold: 'bi-type-bold',
    italic: 'bi-type-italic',
    strikethrough: 'bi-type-strikethrough',
    underline: 'bi-type-underline',
    unorderedList: 'bi-list-ul',
    orderedList: 'bi-list-ol',
    subscript: mdiFormatSubscript,
    superscript: mdiFormatSuperscript,
    hyperlink: 'bi-link',
    toggleFullscreen: 'bi-arrows-fullscreen',
    quote: 'bi-chat-square-quote-fill',
    left: 'bi-justify-left',
    center: 'bi-justify',
    right: 'bi-justify-right',
    justify: 'bi-text-center',
    print: 'bi-printer-fill',
    outdent: 'bi-text-indent-right',
    indent: 'bi-text-indent-left',
    removeFormat: 'bi-eraser-fill',
    formatting: 'bi-textarea',
    fontSize: 'bi-textarea-t',
    align: 'bi-text-left',
    hr: 'bi-dash-square-fill',
    undo: 'bi-arrow-counterclockwise',
    redo: 'bi-arrow-clockwise',
    heading: 'bi-type-h1',
    code: 'bi-code',
    size: 'bi-bounding-box',
    font: 'bi-fonts',
    viewSource: 'bi-code-slash'
  },
  expansionItem: {
    icon: 'bi-chevron-down',
    denseIcon: 'bi-caret-down-fill'
  },
  fab: {
    icon: 'bi-plus',
    activeIcon: 'bi-x'
  },
  field: {
    clear: 'bi-x-circle-fill',
    error: 'bi-exclamation-circle-fill'
  },
  pagination: {
    first: 'bi-chevron-bar-left',
    prev: 'bi-chevron-left',
    next: 'bi-chevron-right',
    last: 'bi-chevron-bar-right'
  },
  rating: {
    icon: 'bi-star-fill'
  },
  stepper: {
    done: 'bi-check',
    active: 'bi-pencil-fill',
    error: 'bi-exclamation-triangle-fill'
  },
  tabs: {
    left: 'bi-chevron-left',
    right: 'bi-chevron-right',
    up: 'bi-chevron-up',
    down: 'bi-chevron-down'
  },
  table: {
    arrowUp: 'bi-arrow-up',
    warning: 'bi-exclamation-triangle-fill',
    firstPage: 'bi-skip-start-fill',
    prevPage: 'bi-chevron-left',
    nextPage: 'bi-chevron-right',
    lastPage: 'bi-skip-end-fill'
  },
  tree: {
    icon: 'bi-caret-right-fill'
  },
  uploader: {
    done: 'bi-check',
    clear: 'bi-x',
    add: 'bi-plus-square-fill',
    upload: 'bi-upload',
    removeQueue: 'bi-clipboard-x',
    removeUploaded: 'bi-clipboard-check'
  }
}
