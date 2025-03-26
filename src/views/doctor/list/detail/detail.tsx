import { defineComponent, h, onBeforeMount, reactive } from 'vue'
import { getDoctorDetail, updateDoctor } from '@/api/doctor'
import type { DoctortDetailType } from '@/types'
import { useRoute } from 'vue-router'
import { MessagePlugin } from 'tdesign-vue-next';

export default defineComponent({
  props: {},
  setup(props, { slots }) {
    const selectOptions = reactive<{
      agencys: Array<{ label: string; value: string| number }> | undefined
    }>({
      agencys: undefined,
    })
    const router = useRoute()
    const doctorId = router.query.id

    //页面信息
    const formData = reactive({
      readonly: true,
      defaultData: {
       agencys: [] as (string | number|undefined)[],
      },
      // 获取数据
      get: () => {
        getDoctorDetail(doctorId as string)
          .then((res:DoctortDetailType) => {
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
              formData.defaultData = { ...formData.defaultData,...res}
            }
          })
          .catch((error) => {
            console.log(error)
          })
      },
      submit: (data: Record<string, unknown>) => {
        console.log(data)
        if(!formData.readonly){
          updateDoctor(data).then((res:string) => {
            if (res) {
              MessagePlugin.success(res)
              formData.readonly = true
              formData.get()

            }
          }).catch((error) => {
            MessagePlugin.error(error)
          })
        }
      },
    })

    const onEdit = () => {
      console.log('eeeeee')
      formData.readonly = false
    }

    // 数据命令
    const commands = { onEdit }
    const setate = {
      selectOptions,
      formData,
    }
    onBeforeMount(() => {
      formData.get()
    })

    return () => {
      if (slots.default) return slots.default({ ...setate, commands })
    }
  },
})
