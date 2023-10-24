import { Upload as AUpload } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'

export const Upload = connect(
  AUpload,
  mapProps({
    value: 'file-list',
    onInput: true,
    readOnly: 'readonly',
  }),
)
