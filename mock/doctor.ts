import { Router } from 'vite-plugin-koa-mock'
import type { Router as KoaRouter } from 'vite-plugin-koa-mock'
import type { doctorType } from '@/types/index'

export const doctorRouter: KoaRouter = new Router()

doctorRouter.post('/mock/doctor/doctor/list', (ctx) => {
  const data = Array(10).fill({
    id: 173561823560601,
    name: '张三',
    sex: '男',
    age: 26,
    address: '北京市朝阳区',
    birthday: '2020-01-01',
    state: '已签约',
    people: 50,
    score: 100,
    card: '110101199003076666',
    phone: '299fbe7450afce9599e24198ea3e1d86',
    organization: '测试机构',
  })

  ctx.response.body = {
    code: 200,
    data: data as doctorType,
  }
})
