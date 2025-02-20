<template>
  <div>
    <t-form-item
      :label="itemData.label"
      :labelWidth="itemData.label ? labelWidth : 0"
      :help="itemData.help"
      :name="itemData.name"
      :rules="itemData.rules"
    >
      <!-- 搜索框 -->
      <t-input
        v-if="itemData.type === 't-input-search'"
        v-model="newFormData[itemData.name]"
        :placeholder="itemData.placeholder"
        :clearable="itemData.clearable || true"
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        ><template #suffixIcon> <search-icon :style="{ cursor: 'pointer' }" /> </template
      ></t-input>
      <!-- 输入框 -->
      <t-input
        v-if="itemData.type === 't-input'"
        v-model="newFormData[itemData.name]"
        :placeholder="itemData.placeholder"
        :clearable="itemData.clearable || true"
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
      >
        ></t-input
      >
      <!-- 下拉框 -->
      <t-select
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-select'"
        v-model="newFormData[itemData.name]"
        :options="itemData.options || optionsDate[itemData.name]"
        placeholder="请选择"
        :multiple="itemData.multiple"
        :clearable="itemData.clearable || true"
        :min-collapsed-num="itemData.minCollapsedNum || 1"
        :keys="itemData.keys || { label: 'label', value: 'value' }"
      ></t-select>
      <!-- 日期选择器 -->
      <t-date-picker
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-date-picker'"
        v-model="newFormData[itemData.name]"
        :clearable="itemData.clearable || true"
        :format="itemData.format || 'YYYY-MM-DD HH:mm:ss'"
      />
      <!-- 日期区间选择器 -->
      <t-date-range-picker
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-date-range-picker'"
        v-model="newFormData[itemData.name]"
        :presets="itemData.presets || []"
        enable-time-picker
        :clearable="itemData.clearable || true"
      />
      <!-- 图片上传 -->
      <t-upload
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-upload'"
        v-model="newFormData[itemData.name]"
        :action="itemData.action"
        theme="image"
        :disabled="borderless"
      />
      <!-- textarea -->
      <t-textarea
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-textarea'"
        v-model="newFormData[itemData.name]"
        :placeholder="itemData.placeholder"
        :clearable="itemData.clearable || true"
      />
      <!-- 开关 -->
      <t-switch
        @change="() => itemChange(itemData.name, newFormData[itemData.name])"
        v-if="itemData.type === 't-switch'"
        v-model="newFormData[itemData.name]"
        :disabled="itemData.disabled"
        :label="itemData.switchLabels"
        size="large"
      >
      </t-switch>
      <!-- 头像(小图) -->
      <t-avatar v-if="itemData.type === 't-avatar'" :image="itemData.imgUrl" />
      <slot v-if="itemData.type === 'slot'"></slot>
    </t-form-item>
  </div>
</template>
<script lang="ts" setup>
import { type configForm } from '@/components/page-module/my-form/types.ts'
import { ref, defineExpose, watch } from 'vue'
import { SearchIcon } from 'tdesign-icons-vue-next'
import { debounce } from '@/utils/function'

/**
 * 渲染出来的是单独的一个元素 , 所以一次只有一个值的变化
 */
const props = withDefaults(
  defineProps<{
    formData: Record<string, unknown> // 表单数据
    itemData: configForm // 表单项数据
    labelWidth?: string | number // label宽度
    borderless?: boolean // 是否无边框
    optionsDate?: Record<string, unknown> //下拉框选项
    itemRules?: Record<string, unknown>
  }>(),
  {},
)

const emit = defineEmits<{
  (e: 'change', name: string, value: Record<string, unknown>): void
  (e: 'Validate', validateResult: unknown, firstError: unknown): void
}>()
const optionsDate = ref(props.optionsDate || {})
const newFormData = ref(JSON.parse(JSON.stringify(props.formData)))
const defaultData = ref(JSON.parse(JSON.stringify(props.formData)))

const border = ref(props.borderless)

const resetData = () => {
  newFormData.value = JSON.parse(JSON.stringify(defaultData.value))
}

watch(
  () => props.borderless,
  () => {
    console.log(`output->borde`, props.borderless)
    border.value = props.borderless
  },
)

// 如果pops.formData有变化，则重新赋值给newFormData
watch(
  () => props.formData,
  () => {
    newFormData.value = JSON.parse(JSON.stringify(props.formData))
    border.value = true
  },
  { deep: true },
)

//表单数据发生变化 , 返回key和value
const itemChange = debounce((name: string, value: Record<string, unknown>) => {
  emit('change', name, value)
}, 500)

defineExpose({
  resetData,
})
</script>
<style lang="scss" scoped>
:deep(.t-form__controls) {
  margin-left: 0 !important;
}
:deep(.t-select-input) {
  max-width: 500px;
}
:deep(.t-date-picker, ) {
  display: flex;
}
:deep(.t-form__controls-content) {
  display: block;
}
:deep(.t-tag-input--break-line:not(.t-is-empty) .t-input) {
  display: flex;
}
:deep(.t-form__controls-content) {
  display: flex !important;
  align-items: center !important;
}

:deep(.t-is-disabled *) {
  color: #000 !important;
}
</style>
