import { Cascader as ACascader } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'

import '@arco-design/web-vue/es/cascader/style/css'

export const Cascader = connect(
  ACascader,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    dataSource: 'options',
  }),
)
