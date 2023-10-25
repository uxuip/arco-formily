import { defineComponent } from 'vue'
import { FormProvider, h } from '@formily/vue'
import { Form as AForm } from '@arco-design/web-vue'
import { config } from '../config'
import type { FormInstance } from '@arco-design/web-vue'
import type { SetupContext } from 'vue'
import type { Form as FormType, IFormFeedback } from '@formily/core'

import '@arco-design/web-vue/es/form/style/css'

type AFormProps = FormInstance['$props']

export interface FormProps extends Omit<AFormProps, 'rules' | 'model' | 'onSubmit' | 'onSubmitSuccess' | 'onSubmitFailed'> {
  form: FormType
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => any | Promise<any>
}

export const Form = defineComponent({
  name: 'FForm',
  props: [
    'form',
    'onSubmit',
    'onSubmitSuccess',
    'onSubmitFailed',
  ],
  setup(props: FormProps, { attrs, slots }: SetupContext) {
    const {
      form,
      onSubmit,
      onSubmitSuccess,
      onSubmitFailed,
    } = props

    const renderAForm = () => h(
      AForm,
      {
        ...attrs,
        // 禁用 arco 的 model 和 rules，使用 formily 进行表单校验
        model: {},
        rules: {},
        async onSubmit() {
          form?.submit(onSubmit)
            .then(onSubmitSuccess)
            .catch(async (feedbacks: IFormFeedback[]) => {
              const hasHandle = typeof onSubmitFailed === 'function'
              const reason = hasHandle ? await onSubmitFailed?.(feedbacks) : undefined

              if (!hasHandle || reason === undefined || !!reason) {
                const error = {
                  form,
                  feedbacks,
                  reason,
                }

                return typeof config.onSubmitFailed === 'function'
                  ? config.onSubmitFailed?.(error)
                  : Promise.reject(error)
              }
            })
        },
      },
      slots,
    )

    return () => h(
      FormProvider,
      { form },
      { default: renderAForm },
    )
  },
})
