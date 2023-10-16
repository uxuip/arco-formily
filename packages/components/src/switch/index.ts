import { Switch as ASwitch } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const Switch = connect(
  ASwitch,
  mapProps({
    ...typeable,
  }),
)
