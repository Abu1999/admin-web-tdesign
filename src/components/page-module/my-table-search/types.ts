import type { configForm } from '@/components/page-module/my-form/types'

export interface Props {
  formConfig: configForm[]
  horizontal?: number // 水平间距 默认20
  vertical?: number // 行距 默认20
  showMaxItem?: number // 默认显示元素数量 超过数值隐藏 | 默认3
  optionsDate?: Record<string, string> // 选项
  comfrimBtn?: string | boolean
  cancelBtn?: string | boolean
  labelWidth?: string | number
}
export interface Options {
  label: string
  value: string | number
}
