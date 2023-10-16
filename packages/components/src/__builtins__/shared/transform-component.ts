import { defineComponent } from 'vue'
import { each, merge } from '@formily/shared'
import { h } from '@formily/vue'
import type { Component } from 'vue'

interface ListenersTransformRules {
  [key: string]: string
  change: string
}

export function transformComponent<T extends Record<string, any>>(tag: any,
  transformRules?: ListenersTransformRules,
  defaultProps?: Partial<T>): Component<T> | any {
  return defineComponent({
    setup(_, { attrs, slots }) {
      return () => {
        let data = {
          ...attrs,
        }

        if (transformRules) {
          const listeners = transformRules
          each(listeners, (event, extract) => {
            data[`on${event[0].toUpperCase()}${event.slice(1)}`]
              = attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`]
          })
        }

        if (defaultProps)
          data = merge(defaultProps, attrs)

        return h(tag, data, slots)
      }
    },
  })
}
