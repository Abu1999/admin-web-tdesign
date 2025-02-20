import type { configForm } from '@/components/page-module/my-form/types.ts'

export const searchConfig: configForm[] = [
  {
    type: 't-select',
    label: '所属机构',
    name: 'agencies',
    placeholder: '请输入',
    keys: { label: 'name', value: 'id' },
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

export const tableColumns = [
  { colKey: 'id', title: '编号', width: '160' },
  { colKey: 'name', title: '姓名' },
  { colKey: 'sex', title: '性别' },
  { colKey: 'birthday', title: '出生日' },
  { colKey: 'phone', title: '联系电话' },
  // { colKey: 'role', title: '医生角色' },
  // { colKey: 'organization', title: '所属机构' },
  { colKey: 'status', title: '状态' },
  { colKey: 'operation', title: '操作', width: '200' },
]

export const colSlot = ['status', 'operation']

export const addConfig: configForm[] = [
  {
    type: 't-input',
    label: '姓名',
    name: 'name',
  },
  {
    type: 't-select',
    label: '性别',
    name: 'sex',
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 0 },
    ],
  },
  {
    type: 't-date-picker',
    label: '生日',
    name: 'birthday',
    format: 'YYYY-MM-DD',
  },
  {
    type: 't-input',
    label: '手机号',
    name: 'phone',
    rules: [{ required: true }],
  },
  {
    type: 't-input',
    label: '登录名',
    name: 'login',
  },
  {
    type: 't-input',
    label: '密码',
    name: 'password',
  },
  {
    type: 't-select',
    label: '机构',
    name: 'agencies',
    placeholder: '请输入',
    keys: { label: 'name', value: 'id' },
  },
]

export const changeConfig: configForm[] = [
  {
    type: 't-input',
    label: '姓名',
    name: 'name',
  },
  {
    type: 't-select',
    label: '性别',
    name: 'sex',
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 0 },
    ],
  },
  {
    type: 't-date-picker',
    label: '生日',
    name: 'birthday',
    format: 'YYYY-MM-DD',
  },
  {
    type: 't-input',
    label: '手机号',
    name: 'phone',
  },
  {
    type: 't-input',
    label: '登录名',
    name: 'login',
  },
  {
    type: 't-input',
    label: '密码',
    name: 'password',
  },
  {
    type: 't-select',
    label: '机构',
    name: 'agencies',
    placeholder: '请输入',
    keys: { label: 'name', value: 'id' },
  },
]
