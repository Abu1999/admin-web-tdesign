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

  // {
  //   span: 4,
  //   type: 't-select',
  //   label: '所属团队',
  //   name: 'select',
  //   multiple: true, //多选
  // }
]

export const searchConfig: configForm[] = [
  {
    type: 't-select',
    label: '所属机构',
    name: 'organization',
    placeholder: '请输入',
  },
  {
    type: 't-select',
    label: '所属团队',
    name: 'team',
    placeholder: '请输入',
  },
  {
    type: 't-input-search',
    name: 'search',
    placeholder: '请输入搜索内容',
  },
]

export const updateConfig: configForm[] = [
  {
    span: 1,
    type: 't-input',
    label: '姓名',
    name: 'name',
    placeholder: '请输入',
  },
  {
    span: 1,
    type: 't-select',
    label: '性别',
    name: 'sex',
    placeholder: '请输入',
  },
  {
    span: 1,
    type: 't-input',
    label: '电话',
    name: 'phone',
    placeholder: '请输入',
  },
  {
    span: 1,
    type: 't-textarea',
    label: '出生日期',
    name: 'birthday',
  },
  {
    span: 4,
    type: 't-input',
    label: '登录名',
    name: 'login',
    placeholder: '请输入',
  },
  {
    span: 4,
    type: 't-input',
    label: '密码',
    name: 'password',
    placeholder: '请输入',
  },
]
