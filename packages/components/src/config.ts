import type { Form, IFormFeedback } from '@formily/core'

interface Config {
  onSubmitFailed?: (
    data: { form: Form; reason: any; feedbacks: IFormFeedback[] }
  ) => any
}

export const config: Config = {}
