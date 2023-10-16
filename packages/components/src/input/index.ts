import { Input as AInput } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { composeExport } from '../__builtins__/shared'
import { typeable } from '../__builtins__/shared/maps'

const Input = connect(
  AInput,
  mapProps({
    ...typeable,
  }),
)

const InputPassword = connect(
  AInput.Password,
  mapProps({
    ...typeable,
  }),
)

const InputSearch = connect(
  AInput.Search,
  mapProps({
    ...typeable,
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
