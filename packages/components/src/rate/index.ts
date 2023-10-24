import { Rate as ARate } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/rate/style/css'

export const Rate = connect(
  ARate,
  mapProps({
    ...typeable,
  }),
)
