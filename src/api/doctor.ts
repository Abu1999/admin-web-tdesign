import RequestHttp from '@/utils/axios'
import { decrypt } from '@/utils/aes'
import type { DoctortDetailType } from '@/types/index'

const type = 'doctor'

/**
 * 获取医生列表
 * @param params
 * @returns
 */
export const getDoctorList = (): Promise<DoctortDetailType[]> => {
  return new Promise((resolve, reject) => {
    // const params = pageInfo
    RequestHttp.post(type + '/doctor/list', {})
      .then((res) => {
        if (res.code === 200) {
          res.data = (res.data as DoctortDetailType[]).map((item) => {
            item.phone = decrypt(item.phone)
            return item
          })

          resolve(res.data as DoctortDetailType[])
        }
      })
      .catch((err) => reject(err))
  })
}
/**
 * 获取权限机构列表
 * @returns
 */
export const getAgencyList = (): Promise<Record<string, unknown>[]> => {
  return new Promise((resolve, reject) => {
    // const params = pageInfo
    RequestHttp.get(type + '/public/agency/list')
      .then((res) => {
        resolve(res.data as Record<string, unknown>[])
      })
      .catch((err) => reject(err))
  })
}
/**
 * 创建医生
 * @param params
 * @returns
 */
export const createDoctor = (params: Record<string, unknown>): Promise<string> => {
  return new Promise((resolve, reject) => {
    RequestHttp.post(type + '/doctor/create', params)
      .then((res) => {
        resolve(res.msg)
      })
      .catch((err) => reject(err))
  })
}

/**
 * 获取医生详情
 * @param params
 * @returns
 */
export const getDoctorDetail = (doctorId: string | number): Promise<DoctortDetailType> => {
  return new Promise((resolve, reject) => {
    RequestHttp.get(type + `/doctor/${doctorId}`)
      .then((res) => {
        if (res && res.code === 200) {
          ;(res.data as DoctortDetailType).phone = decrypt((res.data as DoctortDetailType).phone)
          resolve(res.data as DoctortDetailType)
        }
      })
      .catch((err) => reject(err))
  })
}

/**
 * 更新医生
 * @param params
 * @returns
 */
export const updateDoctor = (params: Record<string, unknown>): Promise<string> => {
  const request = {
    doctorId: params.id,
    name: params.name,
    phone: params.phone,
    sex: params.sex,
    birthday: params.birthday,
    login: params.login,
    password: params.password,
  }
  return new Promise((resolve, reject) => {
    RequestHttp.put(type + '/doctor/update', request)
      .then((res) => {
        if (res.code === 200) {
          resolve(res.msg)
        } else {
          reject(res.msg)
        }
      })
      .catch((err) => reject(err))
  })
}
