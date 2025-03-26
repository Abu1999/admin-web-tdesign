<template>
  <div class="main">
    <List #="{ selectOptions, tableState, addState, changeState }">
      <div class="title">
        {{ $route.meta.title }}
      </div>
      <div class="search">
        <MyTableSearch
          :form-config="searchConfig"
          :optionsDate="selectOptions"
          :comfrimBtn="false"
          @formChange="selectOptions.search"
        >
          <template #button>
            <t-button theme="primary" @click="addState.clickAdd">添加医生</t-button>
          </template>
        </MyTableSearch>
      </div>
      <div class="table">
        <MyTable
          :data="tableState.tableData"
          :pageInfo="tableState.pageInfo"
          :columns="tableColumns"
          :colSlot="colSlot"
        >
          <template #status="{ colRow }">
            <t-switch :defaultValue="!colRow" :label="['启用', '关闭']"></t-switch>
          </template>
          <template #operation="{ row }">
            <div class="operation">
              <t-button variant="text" theme="primary" @click="() => tableState.detail(row.id)"
                >查看详情</t-button
              >
              <t-button variant="text" theme="primary" @click="changeState.clickChange"
                >编辑</t-button
              >
              <t-popconfirm content="确认删除吗" @onConfirm="tableState.del">
                <t-button variant="text" theme="danger">删除</t-button>
              </t-popconfirm>
            </div>
          </template>
        </MyTable>
      </div>

      <MyDrawer
        v-model:visible="addState.visible"
        :config="addConfig"
        @submit="addState.add"
        :optionsDate="selectOptions"
      ></MyDrawer>
      <MyDrawer
        v-model:visible="changeState.visible"
        :config="changeConfig"
        @submit="changeState.change"
        :optionsDate="selectOptions"
      ></MyDrawer>
    </List>
  </div>
</template>
<script lang="ts" setup>
import List from './list'
import { MyTableSearch, MyTable, MyDrawer } from '@/components/page-module/index'
import { searchConfig, tableColumns, colSlot, addConfig, changeConfig } from './config'
</script>
<style lang="scss" scoped>
.main {
  background-color: #fff;
  height: 99%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .title {
    padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingTB-l);
    font: var(--td-font-body-large);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .search {
    padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingTB-l);
    padding-bottom: 0;
  }
  .table {
    padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingTB-xl);
    height: calc(100% - 124px);
    .operation {
      display: flex;
      justify-content: center;
    }
  }
}

:deep(.t-switch.t-is-checked) {
  background-color: var(--td-success-color-4);
}
</style>
