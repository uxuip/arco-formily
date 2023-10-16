import { Slider as ASlider } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

export const Slider = connect(
  ASlider,
  mapProps({
    ...typeable,
  }),
)
