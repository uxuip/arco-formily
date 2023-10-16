import { Switch as ASwitch } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

const Switch = connect(
  ASwitch,
  mapProps({
    ...typeable,
  }),
)

export {
  Switch,
}
