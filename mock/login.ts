import { Router } from 'vite-plugin-koa-mock'
import type { Router as KoaRouter } from 'vite-plugin-koa-mock'

export const loginRouter: KoaRouter = new Router()

loginRouter.post('/mock/doctor/public/login', (ctx) => {
  ctx.response.body = {
    code: 200,
    data: {
      Authorization: '123456',
    },
  }
})
