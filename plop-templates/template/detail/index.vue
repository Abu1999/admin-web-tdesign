<template>
  <div class="pageView">
    <Detail #="{ reject, examine }">
      <div class="title" @click="$router.go(-1)">
        <t-icon name="arrow-left" />
        <span style="margin-left: 4px">
          {{ $route.meta.title }}
        </span>
      </div>
      <div class="content">
        <MyForm
          ref="formRef"
          :config="fromConfig"
          :readonly="true"
          :editBtn="false"
          :submitBtn="false"
          :cancelBtn="false"
        >
          <template #btn>
            <t-space break-line>
              <t-button theme="primary" @click="examine.pass">审核通过</t-button>
              <t-button theme="danger" @click="() => (examine.visible = true)">驳回</t-button>
              <t-button variant="outline" @click="() => router.go(-1)">返回</t-button>
            </t-space>
          </template>
        </MyForm>
      </div>
      <t-dialog
        v-model:visible="examine.visible"
        theme="warning"
        header="确认驳回 ?"
        @confirm="reject.confirm"
      >
        <p>驳回后将不可撤销 !</p>
      </t-dialog>
    </Detail>
  </div>
</template>
<script lang="ts" setup>
import Detail from './detail.tsx'
import MyForm from '@/components/page-module/my-form/MyForm.vue'
import { fromConfig } from './config.ts'
import { ref } from 'vue'
import router from '@/router/index.ts'

const formRef = ref()
</script>
<style lang="scss" scoped>
.pageView {
  background-color: #fff;
  height: 99%;
  display: flex;
  flex-direction: column;
  border-radius: var(--td-radius-default);
  position: relative;
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
