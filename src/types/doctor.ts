// 医生数据类型
export interface doctorType {
  list?: Record<string, unknown>[]
}

//医生详情
export interface DoctortDetailType {
  id?: number
  create_time?: string
  update_time?: string
  create_id?: number
  update_id?: number
  name?: string
  sex?: string
  birthday?: string
  phone?: string
  phone_slice?: string
  avatar?: string
  login?: string
  password?: string
  role_id?: number
  state?: string
  info?: string
  AdminAgencies?: Array<unknown>
  Agencies?: Array<IAgencies>
  Role?: IRole
}
export interface IAgencies {
  id?: number
  create_time?: string
  update_time?: string
  create_id?: number
  update_id?: number
  name?: string
  description?: string
  lon?: string
  lat?: string
  address?: string
  state?: string
  state_desc?: string
  admin_id?: number
  Doctors?: null
}
export interface IRole {
  id?: number
  create_time?: string
  update_time?: string
  create_id?: number
  update_id?: number
  name?: string
  description?: string
  menus?: null
}
