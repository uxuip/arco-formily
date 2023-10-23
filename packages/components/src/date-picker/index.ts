import { DatePicker as ADatePicker } from '@arco-design/web-vue'
import { connect, mapProps } from '@formily/vue'
import { typeable } from '../__builtins__/shared/maps'
import { composeExport } from '../__builtins__/shared'

export const MonthPicker = connect(
  ADatePicker.MonthPicker,
  mapProps({
    ...typeable,
  }),
)

export const QuarterPicker = connect(
  ADatePicker.QuarterPicker,
  mapProps({
    ...typeable,
  }),
)

export const RangePicker = connect(
  ADatePicker.RangePicker,
  mapProps({
    ...typeable,
  }),
)

export const WeekPicker = connect(
  ADatePicker.WeekPicker,
  mapProps({
    ...typeable,
  }),
)

export const YearPicker = connect(
  ADatePicker.YearPicker,
  mapProps({
    ...typeable,
  }),
)

const _DatePicker = connect(
  ADatePicker,
  mapProps({
    ...typeable,
  }),
)

export const DatePicker = composeExport(_DatePicker, {
  MonthPicker,
  QuarterPicker,
  RangePicker,
  WeekPicker,
  YearPicker,
})
