import { TreeSelect as ATreeSelect } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import type { TreeNodeData } from '@arco-design/web-vue'
import type { Field, FieldDataSource } from '@formily/core'

import '@arco-design/web-vue/es/tree-select/style/css'

export const TreeSelect = connect(
  ATreeSelect,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly',
    },
    (props, field) => {
      function transformData(data: (FieldDataSource & TreeNodeData)): TreeNodeData[] {
        return data.map((item) => {
          return {
            ...item,
            children: item.children && transformData(item.children),
            title: item.label,
            key: item.value,
          }
        })
      }
      return {
        data: transformData((field as Field).dataSource),
      }
    },
  ),
)
