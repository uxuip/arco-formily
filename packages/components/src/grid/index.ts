import { Grid as AGrid } from '@arco-design/web-vue'
import { defineComponent, h, provide, ref } from 'vue'
import { composeExport } from '../__builtins__/shared'
import { GridItem } from '../grid-item'
import { CollapsedInjectionKey } from './context'

import '@arco-design/web-vue/es/grid/style/css'

const _Grid = defineComponent({
  setup(_, { attrs, slots }) {
    const collapsed = ref(false)
    provide(CollapsedInjectionKey, collapsed)

    return () => h(
      AGrid,
      {
        ...attrs,
        collapsed: collapsed.value,
      },
      slots,
    )
  },
})

export const Grid = composeExport(_Grid, {
  Item: GridItem,
})
