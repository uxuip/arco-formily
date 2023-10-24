import { Radio as ARadio } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { defineComponent, h } from 'vue'
import { typeable } from '../__builtins__/shared/maps'
import { composeExport } from '../__builtins__/shared'

import '@arco-design/web-vue/es/radio/style/css'

const _Radio = connect(
  defineComponent({
    setup(_, { attrs }) {
      return () => h(ARadio, { attrs }, { default: () => attrs.title })
    },
  }),
  mapProps({
    ...typeable,
    title: true,
  }),
)

export const RadioGroup = connect(
  ARadio.Group,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    dataSource: 'options',
  }),
)

export const Radio = composeExport(_Radio, {
  Group: RadioGroup,
})
