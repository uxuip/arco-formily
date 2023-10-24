import { Switch as ASwitch } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/switch/style/css'

export const Switch = connect(
  ASwitch,
  mapProps({
    ...typeable,
  }),
)
