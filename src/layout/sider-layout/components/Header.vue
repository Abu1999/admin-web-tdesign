<template>
  <div class="header">
    <t-button variant="text" shape="square" @click="changeCollapsed">
      <template #icon><t-icon name="view-list" /></template>
    </t-button>
    <div class="functional">
      <div class="user">
        <t-dropdown trigger="click" size="95" placement="bottom">
          <div class="avatar-box">
            <t-avatar class="avatar" size="50" src="https://fanmingming.com/bing" />
            <ChevronDownIcon />
          </div>
          <template #dropdown>
            <t-dropdown-menu>
              <!-- <t-dropdown-item><UserCircleIcon /> 个人中心 </t-dropdown-item> -->
              <t-dropdown-item @click="quit"><PoweroffIcon /> 退出登录</t-dropdown-item>
            </t-dropdown-menu>
          </template>
        </t-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from '@/router'
import { ChevronDownIcon, UserCircleIcon, PoweroffIcon } from 'tdesign-icons-vue-next'
import { useUserInfoStore, useUserRoutersStore } from '@/stores/index'
const emit = defineEmits<{
  (event: 'changeCollapsed'): void
}>()

const changeCollapsed = () => {
  emit('changeCollapsed')
}

// 退出登录
const quit = () => {
  router.push('/login')
  useUserInfoStore().delInfo()
  useUserRoutersStore().delRouters()
  console.log('退出登录')
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--td-comp-paddingTB-xs) var(--td-comp-paddingTB-m);
}

.functional {
  display: flex;

  & .user {
    cursor: pointer;
    padding-right: 30px;

    & .avatar-box {
      height: 60px;
      display: flex;
      align-items: center;
    }
    & .avatar {
      margin-right: 2px;
    }
  }
}
</style>
