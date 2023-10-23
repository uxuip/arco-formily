import { TimePicker as ATimePicker } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const TimePicker = connect(
  ATimePicker,
  mapProps({
    ...typeable,
  }),
)
