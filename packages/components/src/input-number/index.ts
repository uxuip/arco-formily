import { InputNumber as AInputNumber } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const InputNumber = connect(
  AInputNumber,
  mapProps({
    ...typeable,
  }),
)
