export interface Result {
  code: number
  msg: string
}

// 请求响应参数，包含data
export interface ResultData<T> extends Result {
  data?: T
}
