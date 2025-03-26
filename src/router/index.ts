import 'nprogress/nprogress.css' // progress bar style
import NProgress from 'nprogress' // progress bar
import { createRouter, createWebHistory } from 'vue-router'
import { useUserInfoStore, useUserRoutersStore } from '@/stores'
import { fixedRoutes } from './fixed-router'
const modules = import.meta.glob('../views/**/*.vue')

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...fixedRoutes],
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  }
  NProgress.start()

  const userStore = useUserInfoStore()

  if (userStore.token) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
    const routersList = useUserRoutersStore().getRouters
    if (routersList.length === 0) {
      const menuList = JSON.parse(JSON.stringify(userStore.menuList))
      useUserRoutersStore().setRouters(menuList)
      const routersList = getModules(menuList)
      routersList.forEach((route: any) => {
        router.addRoute(route)
      })
      next({ ...to, replace: true })
    }
    next()
  } else {
    next({ path: '/login' })
  }
})

router.afterEach(() => {
  NProgress.done()
})

function getModules(routers: any) {
  routers.forEach((route: any) => {
    if (route.component) {
      const src = `../views/${route.component}`
      route.component = modules[src]
    }
    if (route.children) {
      getModules(route.children)
    }
  })
  return routers
}

export default router
