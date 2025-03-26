import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(createPersistedState())

export { store }
export * from './frame/menu'
export * from './user/info'
export * from './user/routers'
