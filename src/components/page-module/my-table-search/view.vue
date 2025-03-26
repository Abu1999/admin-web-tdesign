<template>
  <div>
    <!-- <Form
      :config="fromConfig"
      :readonly="readonly"
      :defaultData="formData"
      @submit="onSubmit"
      @eidt="onEdit"
      @back="onBack"
      @cancel="onCancel"
    ></Form> -->
    <!-- <MyTableSearch :form-config="fromConfig" @submit="onSubmit" :showMaxItem="3" @change="onChange"></MyTableSearch> -->
  </div>
</template>
<script lang="ts" setup>
import type { configForm } from '@/components/page-module/my-form/types'
import { ref } from 'vue'

const readonly = ref(true)

const fromConfig: configForm[] = [
  {
    span: 1,
    type: 't-input',
    label: 'input',
    name: 'value1',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-input',
    label: 'input',
    name: 'value2',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-input',
    label: 'input',
    name: 'value3',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-input',
    label: 'input',
    name: 'value3',
    placeholder: '请输入',
  },
  // {
  //   span: 4,
  //   type: 't-date-picker',
  //   label: 'date-picker',
  //   name: 'time',
  // },
  // {
  //   span: 1,
  //   type: 't-date-range-picker',
  //   label: 'date-range-picker',
  //   name: 'timeRange',
  // },
  // {
  //   span: 1,
  //   type: 't-select',
  //   label: 'select',
  //   name: 'select',
  //   options: [
  //     { label: '选项1', value: '1' },
  //     { label: '选项2', value: '2' },
  //   ],
  // },
  // {
  //   type: 't-select',
  //   label: 'selectMultiple',
  //   name: 'selectMultiple',
  //   options: [
  //     { label: '选项1', value: '1' },
  //     { label: '选项2', value: '2' },
  //   ],
  //   multiple: true,
  // },
  // {
  //   span: 3,
  //   type: 't-upload',
  //   label: 'tupian',
  //   name: 'tupian',
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  // },
]

const formData = ref<Record<string, unknown>>({
  value: '111111',
  name: '1111',
  time: '1111',
  timeRange: '1111',
  select: '1',
  selectMultiple: ['1'],
  tupian: [{ name: 'demo-image-1.png', url: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }],
})

interface formData {
  value: formData
  name: string
  time: string
  timeRange: string
  select: string
  selectMultiple: string[]
}

const onChange = (formData: formData) => {
  console.log('数据变化', formData)
}
const onSubmit = (formData: formData) => {
  console.log('父组件', formData)
}
const onEdit = () => {
  readonly.value = false
}
const onBack = () => {
  console.log('返回')
}
const onCancel = () => {
  console.log('取消')
  readonly.value = true
}
</script>
<style lang="scss" scoped></style>
