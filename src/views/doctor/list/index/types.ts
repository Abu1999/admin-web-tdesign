import { type PageInfo } from '@/components/page-module/my-table/types'
import type { DoctortDetailType } from '@/types/index'

export interface SelectOption {
  [key: string]: unknown
}

// 列表
export interface TableState {
  tableData: DoctortDetailType[]
  pageInfo: PageInfo
  get: () => void
  del: () => void
  detail: (url: string) => void
}

// 添加
export interface AddState {
  visible: boolean
  clickAdd: () => void
  add: (fromData: Record<string, unknown>) => void
}

// 修改
export interface ChangeState {
  visible: boolean
  clickChange: () => void
  change: (fromData: Record<string, unknown>) => void
}
