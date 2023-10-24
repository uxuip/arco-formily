import { Textarea as ATextarea } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/textarea/style/css'

export const Textarea = connect(
  ATextarea,
  mapProps({
    ...typeable,
  }),
)
