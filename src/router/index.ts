import 'nprogress/nprogress.css' // progress bar style
import NProgress from 'nprogress' // progress bar
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'
import { userRoutes } from './routes'
import { fixedRoutes } from './fixed-router'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...fixedRoutes, ...userRoutes],
})

router.beforeEach((to, from, next) => {
  console.log(router.getRoutes())
  NProgress.start()

  const userStore = useUserStore()

  if (userStore.token) {
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
  console.log(to)

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
