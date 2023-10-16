import { Input as AInput } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { composeExport } from '../__builtins__/shared'

const Input = connect(
  AInput,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    onInput: true,
  }),
)

const InputPassword = connect(
  AInput.Password,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    onInput: true,
  }),
)

const InputSearch = connect(
  AInput.Search,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
    onInput: true,
  }),
)

const InputCompose = composeExport(Input, {
  Password: InputPassword,
  Search: InputSearch,
  Group: AInput.Group,
})

const InputGroup = AInput.Group

export {
  InputCompose as Input,
  InputPassword,
  InputSearch,
  InputGroup,
}
