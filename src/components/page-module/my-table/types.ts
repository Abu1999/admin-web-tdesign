export interface TableColums {
  title?: string // 名称
  colKey: string // 字段
  width?: string | number
}

// 页码信息
export interface PageInfo {
  total: number
  pageSize: number
  currentPage: number
}

// 页码信息
export interface TdPageInfo {
  current: number
  pageSize: number
  previous: number
}

export interface Props {
  data: Record<string, unknown>[]
  columns: TableColums[]
  pageInfo: PageInfo
  colSlot?: string[]
  loading?: boolean
}
