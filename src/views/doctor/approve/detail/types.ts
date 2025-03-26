export interface DetailType {
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
  agencies: (string | number)[]
}
