// import { reactive, ref } from 'vue'
import type { configForm } from '@/components/page-module/my-form/types.ts'

export const fromConfig: configForm[] = [
  {
    span: 1,
    type: 't-input',
    label: '姓名',
    name: 'name',
    placeholder: '请输入',
  },
  {
    span: 1,
    type: 't-input',
    label: '性别',
    name: 'sex',
    placeholder: '请输入',
  },
  {
    span: 1,
    type: 't-avatar',
    label: 'input',
    name: 'img',
    imgUrl: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
  {
    span: 1,
    type: 't-input',
    label: '联系电话',
    name: 'tel',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-textarea',
    label: '医生简介',
    name: 'doctorinfo',
  },
  {
    span: 4,
    type: 't-switch',
    label: '账号状态',
    name: 'doctorinfo',
  },
  {
    span: 4,
    type: 't-date-picker',
    label: '创建时间',
    name: 'timeRange',
  },
  {
    span: 4,
    type: 't-select',
    label: '所属团队',
    name: 'tema',
    options: [
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
    ],
  },
  {
    span: 4,
    type: 't-select',
    label: '所属团队',
    name: 'select',
    multiple: true, //多选
  },
  {
    span: 2,
    type: 'slot',
    label: '',
    name: 'slottest',
  },
  {
    span: 2,
    type: 'slot',
    label: '',
    name: 'slottest222',
  },
]
