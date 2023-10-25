import { defineComponent } from 'vue'
import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { Button } from '@arco-design/web-vue'
import type { ButtonInstance } from '@arco-design/web-vue'

import '@arco-design/web-vue/es/button/style/css'

type ButtonProps = ButtonInstance['$props']

export const Submit = observer(
  defineComponent({
    name: 'FSubmit',
    setup(props: ButtonProps, { attrs, slots }) {
      const formRef = useParentForm()

      return () => h(
        Button,
        {
          htmlType: attrs?.submit ? 'button' : 'submit',
          type: 'primary',
          ...attrs,
          loading: attrs.loading !== undefined ? attrs.loading : formRef.value?.submitting,
        },
        slots,
      )
    },
  }),
)
