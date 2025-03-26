import { defineComponent, h, onBeforeMount, reactive } from 'vue'
import { login } from '@/api'
import { useUserInfoStore } from '@/stores'
import router from '@/router'
import { type userType } from '@/types'
import { userRoutes } from '@/router/routes'

export default defineComponent({
  props: {
    // id: {
    //   type: [String, Number],
    //   required: false,
    // },
  },
  setup(props, { slots }) {
    const formData = reactive({
      login: 'admin',
      password: '123456',
    })
    const onSubmit = () => {
      console.log('onSubmit')
      login(formData).then((res: userType) => {
        useUserInfoStore().setToken(res.Authorization)
        useUserInfoStore().setMenuList(userRoutes)
        router.push('/')
      })
    }

    // 数据状态
    const state = {
      formData,
    }

    // 数据命令
    const commands = { onSubmit }

    onBeforeMount(() => {})

    return () => {
      if (slots.default) return slots.default({ ...state, commands })
    }
  },
})
