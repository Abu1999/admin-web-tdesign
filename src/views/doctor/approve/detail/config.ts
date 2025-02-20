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
    label: '头像',
    name: 'avatar',
    imgUrl: 'https://tdesign.gtimg.com/site/avatar.jpg',
  },
  {
    span: 1,
    type: 't-input',
    label: '联系电话',
    name: 'phone',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-textarea',
    label: '医生简介',
    name: 'info',
  },
  {
    span: 4,
    type: 't-switch',
    label: '账号状态',
    name: 'state',
  },
  {
    span: 4,
    type: 't-date-picker',
    label: '创建时间',
    name: 'update_time',
  },
  {
    span: 4,
    type: 't-select',
    label: '所属机构',
    name: 'agencys',
    // keys: { label: 'name', value: 'id' },
    multiple: true,
  },
]
