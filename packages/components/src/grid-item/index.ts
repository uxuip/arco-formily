import { GridItem as AGridItem } from '@arco-design/web-vue'
import { defineComponent, h, inject } from 'vue'

import '@arco-design/web-vue/es/grid/style/css'
import { CollapsedInjectionKey } from '../grid/context'

export const GridItem = defineComponent({
  setup(_, { attrs, slots }) {
    const collapsed = inject(CollapsedInjectionKey, false)

    return () => h(
      AGridItem,
      attrs,
      {
        default: (...args: any) => slots.default?.({ collapsed, ...args }),
      },
    )
  },
})
