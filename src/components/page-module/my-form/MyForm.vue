<template>
  <div class="fromclass">
    <t-space direction="vertical">
      <div class="tdesign-demo-item--grid">
        <t-form
          ref="form"
          :data="formData || defaultData"
          :labelAlign="labelAlign || 'right'"
          :disabled="!border"
          @submit="submit"
          @reset="cancel"
          :colon="colon"
          :rules="border ? rules : {}"
          :resetType="resetType"
        >
          <t-row :gutter="[horizontal, vertical]">
            <t-col v-for="(item, index) in config" :key="index" :span="(item.span || 1) * 3">
              <FormItem
                ref="fromitemRef"
                :itemData="item"
                :formData="formData"
                @change="itemChange"
                :reset="cancel"
                :labelWidth="labelWidth"
                :borderless="!border"
                :optionsDate="optionsDate"
                :item-rules="rules"
              >
                <slot :name="item.name"></slot>
              </FormItem>
            </t-col>
          </t-row>
          <div class="footer-btn-box">
            <!-- <t-divider /> -->
            <div class="footer">
              <t-form-item>
                <t-space break-line>
                  <t-button
                    :disabled="false"
                    v-if="editBtn"
                    theme="primary"
                    variant="base"
                    @click="eidt"
                    >{{ typeof editBtn === 'string' ? editBtn : '编辑' }}
                  </t-button>
                  <t-button :disabled="false" v-if="submitBtn" theme="primary" type="submit"
                    >{{ typeof submitBtn === 'string' ? submitBtn : '提交' }}
                  </t-button>
                  <t-button :disabled="false" v-if="cancelBtn" variant="outline" type="reset"
                    >{{ typeof cancelBtn === 'string' ? cancelBtn : '取消' }}
                  </t-button>
                  <slot name="btn"></slot>
                </t-space>
              </t-form-item>
            </div>
          </div>
        </t-form>
      </div>
    </t-space>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, watch } from 'vue'
import FormItem from '../modules/FormItem.vue'
import type { formProps } from './types'
import type { FormProps } from 'tdesign-vue-next'

const form = ref()

//一行默认四个格子 , 每个格子默认占位1 ,最大占四个格子

const formData = ref<Record<string, unknown>>({})
const {
  config,
  labelInterval = '15px',
  horizontal = 20,
  vertical = 20,
  defaultData,
  readonly = true,
  labelWidth = 80,
  optionsDate = {},
  editBtn = true,
  submitBtn = true,
  cancelBtn = true,
  colon = true,
  resetType = 'initial',
  rules,
} = defineProps<formProps>()

const emit = defineEmits<{
  (e: 'submit', value: Record<string, unknown>): void
  (e: 'eidt'): void
  (e: 'cancel'): void
  (e: 'formChange', value: Record<string, unknown>): void
}>()

const border = ref(!readonly)
const itemChange = (name: string, value: unknown) => {
  formData.value[name] = value
}

// 如果有默认值，则赋值给formData
watchEffect(() => {
  if (defaultData && Object.keys(defaultData).length > 0) {
    try {
      formData.value = JSON.parse(JSON.stringify(defaultData))
    } catch (error) {
      console.error('Failed to clone defaultData:', error)
    }
  }
})

// 编辑按钮
const eidt = () => {
  border.value = true
  emit('eidt')
}

// 提交
const submit: FormProps['onSubmit'] = ({ validateResult, firstError }) => {
  // 验证成功并且处于编辑状态
  if (border.value && validateResult === true) {
    emit('submit', formData.value)
    console.log('Validate Success')
  }
}

// 取消 重置数据
const cancel = () => {
  border.value = false
  formData.value = JSON.parse(JSON.stringify(defaultData))
  emit('cancel')
}
const change = (value: Record<string, unknown>) => {
  emit('formChange', value)
}
watch(
  () => formData.value,
  (newValue) => {
    change(newValue)
  },
  { deep: true },
)
</script>
<style lang="scss" scoped>
.tdesign-demo-item--grid {
  height: 100%;
  // overflow-x: auto;
  background-color: #fff;
}
.fromclass {
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 700px;
}

.footer-btn-box {
  width: 100%;

  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 34px 0 34px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
}
.footer {
  width: 100%;
  height: 100%;
  max-height: 200px;
  // padding: 5%;
  // padding-left: 20px;
  padding: 30px 10px;
  // background-color: #ffffff;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  flex-wrap: wrap;
}
:deep(.t-row) {
  padding-left: 10px;
  padding-right: 10px;
}
:deep(.t-form__controls) {
  margin-left: 0 !important;
}
// :deep(.t-range-input){
//   min-width: 150px;
// }
// :deep(.t-select-input){
//   min-width: 150px;
// }

:deep(.t-form__label) {
  // padding-right: v-bind(labelInterval)px !important;
  padding-right: v-bind(labelInterval) !important;
  // width: auto !important;
}

:deep(.t-date-picker, ) {
  display: flex;
  width: 100%;
}
:deep(.t-form__controls-content) {
  display: block;
}

:deep(.t-tag-input--break-line:not(.t-is-empty) .t-input) {
  display: flex;
}
</style>
