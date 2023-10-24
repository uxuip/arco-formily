import { InputNumber as AInputNumber } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/input-number/style/css'

export const InputNumber = connect(
  AInputNumber,
  mapProps({
    ...typeable,
  }),
)
