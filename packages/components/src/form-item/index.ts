import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/vue'
import { FormItem as AFormItem } from '@arco-design/web-vue'

export const FormItem = connect(
  AFormItem,
  mapProps(
    (props, field) => {
      if (isVoidField(field) || !field)
        return props

      const takeMessage = () => {
        const split = (messages: any[]) => {
          return messages.reduce((buf, text, index) => {
            if (!text)
              return buf
            return index < messages.length - 1
              ? buf.concat([text, ', '])
              : buf.concat([text])
          }, [])
        }
        if (field.validating)
          return
        if (props.help)
          return props.help
        if (field.selfErrors.length)
          return split(field.selfErrors)
        if (field.selfWarnings.length)
          return split(field.selfWarnings)
        if (field.selfSuccesses.length)
          return split(field.selfSuccesses)
      }

      const errorMessages = takeMessage()

      return {
        help: Array.isArray(errorMessages)
          ? errorMessages.join(', ')
          : errorMessages,
        validateStatus: (Array.isArray(field.decorator) && field.decorator[1]?.feedbackStatus) || field.validateStatus,
        extra: props.extra || field.description,
        asterisk: props.asterisk ?? (field.required && field.pattern !== 'readPretty'),
        label: props.label ?? field.title,
      }
    },
  ),
)
