import { Textarea as ATextarea } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const Textarea = connect(
  ATextarea,
  mapProps({
    ...typeable,
  }),
)
