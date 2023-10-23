import { Cascader as ACascader } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'

export const Cascader = connect(
  ACascader,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    dataSource: 'options',
  }),
)
