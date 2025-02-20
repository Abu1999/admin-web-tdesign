import type { FormRule, SwitchValue, UploadProps } from 'tdesign-vue-next'
import type { FormProps } from 'tdesign-vue-next'

export interface formProps {
  labelWidth?: string | number //标签宽度 默认80
  labelAlign?: string //标签对齐方式 默认right | right | left | top
  labelInterval?: string //标签间距 默认'15px'
  horizontal?: number //水平间距 默认20px
  vertical?: number //垂直间距 默认20px
  config: configForm[] //表单配置
  defaultData?: Record<string, unknown>
  readonly?: boolean //是否只读 默认true
  optionsDate?: Record<string, Array<{ label: string; value: string | number | unknown }>> //下俩列表数据
  editBtn?: boolean | string //编辑按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
  submitBtn?: boolean | string //提交按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
  cancelBtn?: boolean | string //取消按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
  backBtn?: boolean | string //返回按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
  rules?: FormProps['rules']
  colon?: boolean
  resetType?: 'initial' | 'empty' // 重置表单时，重置类型。initial 表示重置为初始值；empty 表示重置为空。默认为 initial。
}

type itemTypes =
  | 't-input'
  | 't-select'
  | 't-date-picker'
  | 't-date-range-picker'
  | 't-textarea'
  | 't-switch'
  | 't-checkbox-group'
  | 't-avatar'
  | 't-upload'
  | 't-input-search'
  | 'slot'

//item配置
export interface configForm {
  span?: number //占位数1 默认每行四个格子 默认1 最大4
  type: itemTypes //组件类型
  label?: string //组件标题
  name: string //表单名称
  placeholder?: string //输入框placeholder
  options?: Array<{ label: string; value: string | number | unknown }> //下拉框选项
  multiple?: boolean //是否可以选择多个值
  minCollapsedNum?: number //select最小隐藏项数量
  mode?: string //日期选择模式
  format?: string //日期格式
  clearable?: boolean //是否可清空
  keys?: { label: string; value: string } //options选项的label和value 的key
  presets?: [] //日期选择器快捷选项
  autoUpload?: boolean // 是否自动上传
  action?: string // 图片上传地址
  // formatResponse?: Function
  customValue?: Array<SwitchValue> //用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']
  switchLabels?: Array<string> //用于自定义开关的文字，[打开时的文字，关闭时的文字]。默认为 ['开', '关']。示例：['开启', '关闭']
  imgUrl?: string // 图片地址
  files?: UploadProps['value'] // 文件列表
  disabled?: boolean // 是否禁用
  help?: string // 帮助信息
  rules?: Array<FormRule>
}
