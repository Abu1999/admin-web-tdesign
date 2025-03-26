import RequestHttp from '@/utils/axios'
import { type userType } from '@/types'
import { MessagePlugin } from 'tdesign-vue-next'

/**
 * 登录
 * @param params
 * @returns
 */
export const login = (params: Record<string, unknown>): Promise<userType> => {
  return new Promise((resolve, reject) => {
    RequestHttp.post('doctor/public/login', params)
      .then((res) => {
        if (res && res.code === 200) {
          MessagePlugin.success('登录成功')
          resolve(res.data as userType)
        }
      })
      .catch((err) => reject(err))
  })
}
