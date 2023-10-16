import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue'
import { Button } from '@arco-design/web-vue'

const Reset = observer(
  defineComponent({
    name: 'FReset',
    props: {
      forceClear: {
        type: Boolean,
        default: false,
      },
      validate: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { attrs, slots }: any) {
      const formRef = useParentForm()
      return () => {
        const form = formRef?.value
        return h(
          Button,
          {
            ...attrs,
            onClick: (e: MouseEvent) => {
              if (attrs?.click && attrs.click(e) === false)
                return

              form
                ?.reset('*', {
                  forceClear: props.forceClear,
                  validate: props.validate,
                })
                .then(attrs.resetValidateSuccess)
                .catch(attrs.resetValidateFailed)
            },
          },
          slots,
        )
      }
    },
  }),
)

export {
  Reset,
}
