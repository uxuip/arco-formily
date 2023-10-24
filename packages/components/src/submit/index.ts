import { defineComponent } from 'vue'
import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { Button } from '@arco-design/web-vue'
import type { ButtonInstance } from '@arco-design/web-vue'
import type { IFormFeedback } from '@formily/core'

import '@arco-design/web-vue/es/button/style/css'

type ButtonProps = ButtonInstance['$props']

export interface ISubmitProps extends ButtonProps {
  onClick?: (e: MouseEvent) => any
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}

export const Submit = observer(
  defineComponent({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup(props: ISubmitProps, { attrs, slots }) {
      const formRef = useParentForm()

      return () => {
        const {
          onClick,
          onSubmit,
          onSubmitSuccess,
          onSubmitFailed,
        } = props

        const form = formRef?.value
        return h(
          Button,
          {
            htmlType: attrs?.submit ? 'button' : 'submit',
            type: 'primary',
            ...attrs,
            loading: attrs.loading !== undefined ? attrs.loading : form?.submitting,
            onClick: (e: any) => {
              if (onClick) {
                if (onClick?.(e) === false)
                  return
              }

              if (onSubmit) {
                form
                  ?.submit(onSubmit)
                  .then(onSubmitSuccess)
                  .catch(onSubmitFailed)
              }
            },
          },
          slots,
        )
      }
    },
  }),
)
