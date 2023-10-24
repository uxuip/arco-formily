import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue'
import { Button } from '@arco-design/web-vue'
import type { IFormFeedback } from '@formily/core'
import type { ButtonInstance } from '@arco-design/web-vue'

import '@arco-design/web-vue/es/button/style/css'

type ButtonProps = ButtonInstance['$props']

export interface IResetProps extends ButtonProps {
  forceClear?: boolean
  validate?: boolean
  onClick?: (...e: any[]) => any
  onResetValidateSuccess?: (payload: any) => void
  onResetValidateFailed?: (feedbacks: IFormFeedback[]) => void
}

export const Reset = observer(
  defineComponent({
    name: 'FReset',
    props: [
      'forceClear',
      'validate',
      'onClick',
      'onResetValidateSuccess',
      'onResetValidateFailed',
    ],
    setup(props: IResetProps, { attrs, slots }) {
      const formRef = useParentForm()
      return () => {
        return h(
          Button,
          {
            ...attrs,
            onClick: (e: MouseEvent) => {
              if (props?.onClick && props.onClick(e) === false)
                return

              formRef?.value
                ?.reset('*', {
                  forceClear: props.forceClear,
                  validate: props.validate,
                })
                .then(props.onResetValidateSuccess)
                .catch(props.onResetValidateFailed)
            },
          },
          slots,
        )
      }
    },
  }),
)
