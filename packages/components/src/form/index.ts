import { defineComponent } from 'vue'
import { FormProvider, h } from '@formily/vue'
import { Form as AForm } from '@arco-design/web-vue'
import type { FormInstance } from '@arco-design/web-vue'
import type { SetupContext, VNode } from 'vue'
import type { Form as FormType, IFormFeedback } from '@formily/core'

type AFormProps = FormInstance['$props']

export interface FormProps extends Omit<AFormProps, 'rules' | 'model'> {
  form: FormType
  previewTextPlaceholder?: string | (() => VNode)
  onAutoSubmit?: (values: any) => any
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}

export const Form = defineComponent({
  name: 'FForm',
  setup(props: FormProps, { attrs, slots }: SetupContext) {
    return () => {
      const data = {
        ...props,
        ...attrs,
        // 禁用 arco 的 model 和 rules，使用 formily 进行表单校验
        model: {},
        rules: {},
      }
      return h(
        FormProvider,
        { form: data.form },
        { default: () => h(AForm, data, slots) },
      )
    }
  },
})
