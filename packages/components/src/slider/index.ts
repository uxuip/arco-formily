import { Slider as ASlider } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'

import '@arco-design/web-vue/es/slider/style/css'

export const Slider = connect(
  ASlider,
  mapProps({
    ...typeable,
  }),
)
