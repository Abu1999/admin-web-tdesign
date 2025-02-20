import { defineComponent, onBeforeMount, reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

import { getDoctorDetail } from '@/api/doctor'
import { useRouter , useRoute } from 'vue-router'
import type { DoctortDetailType } from '@/types'
export default defineComponent({
  props: {},
  setup(props, { slots }) {
    const router = useRouter()
    const doctorId = useRoute().query.id
    const selectOptions = reactive<{
          agencys: Array<{ label: string; value: string| number }> | undefined
        }>({
          agencys: undefined,
        })
    const formData = reactive({
      defaultData: {
        agencys: [] as (string | number | undefined)[],
      },
      get: () => {
        getDoctorDetail(doctorId as string)
          .then((res: DoctortDetailType) => {
            if (res) {
              console.log(res)
              if (res.Agencies) {
                selectOptions.agencys = res.Agencies?.map((item) => {
                  return {
                    label: item.name || '',
                    value: item.id || '',
                  }
                })
              }else{
                selectOptions.agencys = []
              }

              formData.defaultData.agencys = res.Agencies ? [res.Agencies[0].id] : []
              formData.defaultData = { ...formData.defaultData, ...res }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
    })

    //审核
    const examine = reactive({
      visible: false,
      pass: () => {
        MessagePlugin.success('审核通过')
        setTimeout(() => {
          router.back()
        }, 500)
      },
    })

    //驳回
    const reject = reactive({
      visible: false,
      confirm: () => {
        MessagePlugin.success('已驳回')
        setTimeout(() => {
          router.back()
        }, 500)
      },
      cancel: () => {
        reject.visible = false
      },
    })

    const state = { examine, reject, formData ,selectOptions }
    // 数据命令
    const commands = {}
    onBeforeMount(() => {
      formData.get()
    })
    return () => {
      if (slots.default) return slots.default({ ...state, commands })
    }
  },
})
