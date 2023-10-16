import { defineComponent } from 'vue'
import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { Button } from '@arco-design/web-vue'
import type { IFormFeedback } from '@formily/core'
import type { SetupContext } from 'vue'

export interface ISubmitProps {
  onClick?: (e: MouseEvent) => any
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}

const Submit = observer(
  defineComponent({
    name: 'FSubmit',
    props: ['onClick', 'onSubmit', 'onSubmitSuccess', 'onSubmitFailed'],
    setup(props, { attrs, slots }: SetupContext) {
      const formRef = useParentForm()

      return () => {
        const {
          onClick = attrs?.onClick,
          onSubmit = attrs?.onSubmit,
          onSubmitSuccess = attrs?.onSubmitSuccess,
          onSubmitFailed = attrs?.onSubmitFailed,
        } = props

        const form = formRef?.value
        return h(
          Button,
          {
            nativeType: attrs?.submit ? 'button' : 'submit',
            type: 'primary',
            ...attrs,
            loading: attrs.loading !== undefined ? attrs.loading : form?.submitting,
            onClick: (e: any) => {
              if (onClick) {
                if (onClick(e) === false)
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

export {
  Submit,
}