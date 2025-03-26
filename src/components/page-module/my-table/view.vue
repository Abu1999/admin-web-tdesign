<template>
  <div>
    <MyTable :columns="tableColumns" :data="tableData" :page-info="PageInfo" @page-change="change">
    </MyTable>
  </div>
</template>
<script lang="tsx" setup>
import { MyTable } from '@/components'
import { reactive } from 'vue'

const tableColumns = [
  { colKey: 'applicant', title: '申请人', width: '100' },
  { colKey: 'channel', title: '签署方式' },
  { colKey: 'detail.email', title: '邮箱地址', ellipsis: true },
  { colKey: 'createTime', title: '申请时间' },
  {
    colKey: 'status',
    title: '审批状态',
    width: 120,
    cell: (h, { row, col }) => {
      return <div>{row[col.colKey] + '1111'}</div>
    },
  },
]
const PageInfo = reactive({
  total: 100,
  pageSize: 10,
  currentPage: 1,
})

const tableData = getTableData()

function getTableData(total = 10) {
  const data = []
  for (let i = 0; i < total; i++) {
    data.push({
      applicant: ['贾明', '张三', '王芳'][i % 3],
      channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
      status: '测试',
    })
  }
  return data
}

const change = () => {}
</script>
<style lang="scss" scoped>
:deep(.row) {
  background-color: red;
}
</style>
