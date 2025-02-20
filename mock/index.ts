import { Router } from 'vite-plugin-koa-mock'
import type { Router as KoaRouter } from 'vite-plugin-koa-mock'
import { doctorRouter } from './doctor'
import { loginRouter } from './login'

export const router: KoaRouter = new Router()

router.use(doctorRouter.routes(), doctorRouter.allowedMethods())
router.use(loginRouter.routes(), loginRouter.allowedMethods())
