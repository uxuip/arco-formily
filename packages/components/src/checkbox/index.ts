import { Checkbox as ACheckbox } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { defineComponent, h } from 'vue'
import { typeable } from '../__builtins__/shared/maps'
import { composeExport } from '../__builtins__/shared'

const _Checkbox = connect(
  defineComponent({
    setup(_, { attrs }) {
      return () => h(ACheckbox, { attrs }, { default: () => attrs.title })
    },
  }),
  mapProps({
    ...typeable,
    title: true,
  }),
)

export const CheckboxGroup = connect(
  ACheckbox.Group,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    dataSource: 'options',
  }),
)

export const Checkbox = composeExport(_Checkbox, {
  Group: CheckboxGroup,
})
