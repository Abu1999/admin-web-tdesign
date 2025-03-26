import { defineComponent, onBeforeMount, reactive } from 'vue'
import type { SelectOption, TableState, AddState, ChangeState } from './types'
import { getDoctorList, createDoctor } from '@/api'
import router from '@/router'

export default defineComponent({
  props: {},
  setup(props, { slots }) {
    // 筛选数据
    const selectOptions = reactive<SelectOption>({
      agencies: [],
      team: [],
      search: (value: Record<string, unknown>) => {
        console.log(value, 'setate')
      },
    })

    // 列表
    const tableState = reactive<TableState>({
      tableData: [],
      pageInfo: {
        total: 0,
        pageSize: 10,
        currentPage: 1,
      },
      get: () => {
        getDoctorList().then((res) => {
          tableState.tableData = res
          tableState.pageInfo.total = res.length
        })
      },
      del: () => {},
      detail: (id) => {
        router.push({ path: '/doctor/detail', query: { id } })
      },
    })

    // 添加
    const addState = reactive<AddState>({
      visible: false,
      clickAdd: () => {
        addState.visible = true
      },
      add: (fromData) => {
        createDoctor(fromData).then((res) => {
          console.log(res)
        })
      },
    })

    // 修改
    const changeState = reactive<ChangeState>({
      visible: false,
      clickChange: () => {
        changeState.visible = true
      },
      change: () => {},
    })

    // const getAgency = () => {
    //   getAgencyList().then((res) => {
    //     selectOptions.agencies = res
    //   })
    // }

    // 数据信息
    const state = { selectOptions, tableState, addState, changeState }
    // 数据命令
    const commands = {}

    onBeforeMount(() => {
      tableState.get()
      // getAgency()
    })

    return () => {
      if (slots.default) return slots.default({ ...state, commands })
    }
  },
})
