<template>
  <div class="table-container">
    <div class="table-main">
      <t-table :fixedRows="[1]" :loading="loading" row-key="index" :data="data" :columns="columns">
        <template v-for="item in props.colSlot" #[item]="{ row }">
          <slot :name="item" :colRow="row[item]" :row="row"> </slot>
        </template>
      </t-table>
    </div>
    <div class="table-pagination">
      <t-pagination
        :total="newPageInfo.total"
        :current="newPageInfo.currentPage"
        :page-size="newPageInfo.pageSize"
        show-first-and-last-page-btn
        @current-change="onCurrentChange"
        @page-size-change="onPageSizeChange"
        @change="onChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type Props, type PageInfo, type TdPageInfo } from './types'
import { reactive } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  pageInfo: () => ({
    total: 0,
    pageSize: 10,
    currentPage: 1,
  }),
})

const newPageInfo = reactive(props.pageInfo)

const emit = defineEmits<{
  (e: 'update:pageInfo', value: PageInfo): void
  (e: 'pageChange', value: PageInfo): void
}>()

const onPageSizeChange = (size: number) => {
  newPageInfo.pageSize = size
  emit('update:pageInfo', newPageInfo)
}

const onCurrentChange = (index: number, pageInfo: TdPageInfo) => {
  newPageInfo.currentPage = pageInfo.current
  emit('update:pageInfo', newPageInfo)
}

const onChange = () => {
  emit('pageChange', newPageInfo)
}
</script>
<style lang="scss" scoped>
.table-container {
  // padding: 0 var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);
  border-radius: var(--td-radius-medium);
  background-color: var(--td-bg-color-container);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.table-main {
  flex: 1;
  overflow: auto;
}
.table-pagination {
  margin-top: var(--td-comp-margin-xxl);
}

:deep(.t-table--loading) {
  height: 100%;
}
:deep(.t-table th) {
  background-color: var(--td-gray-color-1);
  text-align: center;
}

:deep(.t-table tr td) {
  text-align: center;
}
</style>
