import { Select as ASelect } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'

import '@arco-design/web-vue/es/select/style/css'

export const Select = connect(
  ASelect,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    dataSource: 'options',
  }),
)
