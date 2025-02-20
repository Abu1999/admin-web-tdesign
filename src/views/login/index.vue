<template>
  <div class="login-main">
    <login #="{ formData, commands }">
      <t-card :style="{ width: '500px' }">
        <div class="card-text">欢迎登陆</div>

        <t-form
          ref="form"
          :data="formData"
          :colon="true"
          :label-width="0"
          @submit="commands.onSubmit"
        >
          <t-form-item name="login">
            <t-input v-model="formData.login" clearable placeholder="请输入账户名">
              <template #prefix-icon>
                <desktop-icon />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item name="password">
            <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
              <template #prefix-icon>
                <lock-on-icon />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item>
            <t-button theme="primary" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </login>
  </div>
</template>
<script lang="ts" setup>
import login from './login'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'
</script>
<style lang="scss" scoped>
.login-main {
  height: 100vh;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-text {
  text-align: center;
  padding: var(--td-size-5) 0 var(--td-size-12) 0;
  font-size: var(--td-font-size-headline-medium);
}
</style>
