<template>
  <t-form ref="form" :data="formData" @submit="submitForm" @reset="resetForm" colon>
    <t-row>
      <t-col :span="9" class="formbox">
        <!-- [水平间隔,垂直间隔] -->
        <t-row :gutter="[horizontal || 0, vertical || 20]">
          <t-col v-for="item in formConfig" :key="item.name" :span="(item.span || 1) * 4">
            <FormItem
              ref="fromitemRef"
              :itemData="item"
              :formData="formData"
              :labelWidth="labelWidth"
              :optionsDate="optionsDate"
              @change="onChange"
            >
              <slot :name="item.name"></slot>
            </FormItem>
          </t-col>
        </t-row>
      </t-col>
      <t-col :span="3" class="operation-container">
        <t-form-item>
          <div class="btn">
            <slot name="button"> </slot>
            <t-button v-if="comfrimBtn" theme="primary" type="submit">
              {{ typeof comfrimBtn === 'string' ? comfrimBtn : '搜索' }}</t-button
            >
            <t-button v-if="cancelBtn" theme="default" variant="base" type="reset">
              {{ typeof comfrimBtn === 'string' ? comfrimBtn : '重置' }}</t-button
            >
          </div>
        </t-form-item>
      </t-col>
    </t-row>
  </t-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import FormItem from '../modules/FormItem.vue'
import type { Props } from './types'
import type { FormProps } from 'tdesign-vue-next'

/**
 * my-table-search
 *
 * 方法
 * formChange : 表单发生变化时触发 返回表单数据 *
 * submit : 提交表单时触发 返回表单数据
 * reset : 重置表单时触发
 *
 * 数据
 * formData : 表单数据
 *
 * 属性
 * formConfig : 表单配置
 * horizontal : 水平间距 默认20
 * vertical : 行距 默认20
 * optionsDate : 选项  | 格式为 opteionsDate = {select1:[{label:'',value:''}],select2:[{label:'',value:''}]}
 * comfrimBtn : 提交按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
 * cancelBtn : 取消按钮  是否显示 | 默认true  | 类型为string时 为按钮的文字
 */

const { optionsDate = {}, comfrimBtn = true, cancelBtn = true } = defineProps<Props>()

const emit = defineEmits<{
  submit: [value: Record<string, unknown>]
  formChange: [value: Record<string, unknown>]
  reset: [] // 重置表单
}>()

const formData = ref<Record<string, unknown>>({ timeRange: [] })
const form = ref(null)

// 提交表单
const submitForm: FormProps['onSubmit'] = () => {
  emit('submit', formData.value)
}

const onChange = (name: string, value: Record<string, unknown>) => {
  formData.value[name] = value
}
// 重置表单
const resetForm = () => {
  emit('reset')
}

// 监听表单变化
watch(
  () => formData.value,
  (newValue, oldValue) => {
    emit('formChange', newValue)
  },
  { deep: true },
)
</script>

<style lang="scss" scoped>
:deep(.t-form__controls) {
  margin-left: 0 !important;
}
:deep(.t-form__label) {
  padding-right: 10px;
}
:deep(.t-form__item) {
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
}
:deep(.t-col) {
  width: 600px;
}
.formbox {
  margin-bottom: 20px;
}
.operation-container {
  display: flex;
  .btn {
    width: 100%;
    flex: 1;
    // min-width: 300px;
    display: flex;
    justify-content: flex-end;
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    :deep(.t-button) {
      max-width: 100px;
      margin-right: 14px;
      margin-bottom: 20px;
      ::deep(.t-button__text) {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
