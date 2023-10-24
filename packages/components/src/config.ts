import type { Form, IFormFeedback } from '@formily/core'

interface Config {
  onSubmitFailed?: (
    data: { form: Form; error: any; feedbacks: IFormFeedback[] }
  ) => any
}

export const config: Config = {}
