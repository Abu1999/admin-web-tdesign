import type { configForm } from '../my-form/types'

export interface Props {
  visible: boolean
  config: configForm[]
  size?: string
  optionsDate?: Record<string, string>
  layout?: 'vertical' | 'inline'
  labelAlign?: 'left' | 'right' | 'top'
  rules?: Record<string, unknown>
}
