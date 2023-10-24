import { Upload as AUpload } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'

import '@arco-design/web-vue/es/upload/style/css'

export const Upload = connect(
  AUpload,
  mapProps({
    value: 'file-list',
    onInput: true,
    readOnly: 'readonly',
  }),
)
