<template>
  <div class="pageView">
    <Detail #="{ formData, commands, selectOptions }">
      <div class="title" @click="$router.go(-1)">
        <t-icon name="arrow-left" />
        <span style="margin-left: 4px">
          {{ $route.meta.title }}
        </span>
      </div>
      <div class="content">
        <MyForm
          :config="fromConfig"
          :readonly="formData.readonly"
          @eidt="commands.onEdit"
          @cancel="() => (formData.readonly = false)"
          @submit="formData.submit"
          :default-data="formData.defaultData"
          :optionsDate="selectOptions"
        ></MyForm>
      </div>
    </Detail>
  </div>
</template>
<script lang="ts" setup>
import Detail from './detail'
import MyForm from '@/components/page-module/my-form/MyForm.vue'
import { fromConfig } from './config'
</script>
<style lang="scss" scoped>
.pageView {
  background-color: #fff;
  height: 99%;
  display: flex;
  flex-direction: column;
  border-radius: var(--td-radius-default);
  position: relative;
  min-height: 600px;
  .title {
    padding: var(--td-comp-paddingTB-l) var(--td-comp-paddingTB-l);
    font: var(--td-font-body-large);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    height: calc(100% - 60px);
    padding: 10px 20px;
  }
}
</style>
