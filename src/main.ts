import './style/index.scss'

import { createApp } from 'vue'
import { store } from '@/stores'
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'

import App from './App.vue'
import router from './router'

import { permission } from '@/utils/permission'

const app = createApp(App)
app.directive('permission', permission)
app.use(store)
app.use(router)

app.mount('#app')
