import { Input as AInput } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { composeExport } from '../__builtins__/shared'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/input/style/css'

const InputConnected = connect(
  AInput,
  mapProps({
    ...typeable,
  }),
)

export const InputPassword = connect(
  AInput.Password,
  mapProps({
    ...typeable,
  }),
)

export const InputSearch = connect(
  AInput.Search,
  mapProps({
    ...typeable,
  }),
)

export const Input = composeExport(InputConnected, {
  Password: InputPassword,
  Search: InputSearch,
  Group: AInput.Group,
})

export const InputGroup = AInput.Group
