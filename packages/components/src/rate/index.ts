import { Rate as ARate } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const Rate = connect(
  ARate,
  mapProps({
    ...typeable,
  }),
)
