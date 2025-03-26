import { defineComponent, reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import router from '@/router'

export default defineComponent({
  props: {},
  setup(props, { slots }) {
    const fromData = reactive({
      name: '',
      sex: '',
      birthday: '',
      phone: '',
      phone_slice: '',
      avatar: '',
      login: '',
      password: '',
      role_id: '',
      state: '',
      info: '',
      AdminAgencies: '',
      agencies: '',
      role: '',
    })

    //审核
    const examine = reactive({
      visible: false,
      pass: () => {
        MessagePlugin.success('审核通过')
        setTimeout(() => {
          router.go(-1)
        }, 1000)
      },
    })

    //驳回
    const reject = reactive({
      visible: false,
      confirm: () => {
        MessagePlugin.success('已驳回')
        setTimeout(() => {
          router.go(-1)
        }, 1000)
      },
      cancel: () => {
        reject.visible = false
      },
    })

    const state = { examine, reject, fromData }
    // 数据命令
    const commands = {}

    return () => {
      if (slots.default) return slots.default({ ...state, commands })
    }
  },
})
