import { defineComponent } from 'vue'
import { FormProvider, h } from '@formily/vue'
import { Form as AForm } from '@arco-design/web-vue'
import { config } from '../config'
import type { FormInstance } from '@arco-design/web-vue'
import type { SetupContext } from 'vue'
import type { Form as FormType, IFormFeedback } from '@formily/core'

type AFormProps = FormInstance['$props']

export interface FormProps extends Omit<AFormProps, 'rules' | 'model' | 'onSubmit' | 'onSubmitSuccess' | 'onSubmitFailed'> {
  form: FormType
  onSubmit?: (values: any) => any
  onSubmitSuccess?: (payload: any) => void
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => any | Promise<any>
}

export const Form = defineComponent({
  name: 'FForm',
  setup(_props: FormProps, { attrs, slots }: SetupContext) {
    const props = {
      ..._props,
      ...attrs,
      // 禁用 arco 的 model 和 rules，使用 formily 进行表单校验
      model: {},
      rules: {},
    }

    const {
      form,
      onSubmit,
      onSubmitSuccess,
      onSubmitFailed,
      ...formProps
    } = props

    const renderAForm = () => h(
      AForm,
      {
        ...formProps,
        async onSubmit() {
          let feedbacks: IFormFeedback[] = []
          try {
            await form?.submit(onSubmit)
              .then(onSubmitSuccess)
              .catch((error) => {
                feedbacks = error
                return typeof onSubmitFailed === 'function'
                  ? props.onSubmitFailed?.(error)
                  : Promise.reject(error)
              })
          }
          catch (error) {
            config.onSubmitFailed?.({
              form,
              feedbacks,
              error,
            })
          }
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
