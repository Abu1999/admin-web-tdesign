<template>
  <div>
    <t-drawer
      v-model:visible="visible"
      header="标题名称"
      :on-confirm="handleClick"
      @close="handleClose"
      :size="size"
    >
      <t-form ref="formRef" :data="formData" :layout="layout" colon :labelAlign="labelAlign">
        <template v-for="(item, index) in config" :key="index">
          <FormItem
            :itemData="item"
            :formData="formData"
            :optionsDate="optionsDate"
            @change="onChange"
            class="form-item"
          />
        </template>
      </t-form>
    </t-drawer>
  </div>
</template>
<script lang="ts" setup>
import FormItem from '@/components/page-module/modules/FormItem.vue'
import { ref, computed } from 'vue'
import { type Props } from './types'

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  size: '25%',
  layout: 'vertical',
  labelAlign: 'top',
})

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'submit', value: Record<string, unknown>): void
}>()

const formData = ref<Record<string, unknown>>({})
const formRef = ref()

//表单数据发生变化 , 更新formData的值
const onChange = (name: string, value: unknown) => {
  console.log(name, value)
  formData.value[name] = value
}

const submit = () => {
  formRef.value.validate().then((validateResult: unknown) => {
    if (validateResult === true) {
      emit('submit', formData.value)
    }
  })
}
const visible = computed(() => {
  return props.visible
})

const handleClick = () => {
  submit()
  // emit('update:visible', false)
}
const handleClose = () => {
  emit('update:visible', false)
}
</script>
<style lang="scss" scoped>
.form-item {
  margin-bottom: 20px;
}
</style>
