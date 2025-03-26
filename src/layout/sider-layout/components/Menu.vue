<template>
  <t-menu
    v-model="$route.name"
    theme="light"
    :defaultExpanded="defaultExpanded"
    :collapsed="props.collapsed"
  >
    <template v-for="(menu, index) in menuData" :key="index">
      <t-menu-item :value="menu.name" v-if="menu.children.length === 0" @click="goTo(menu.name)">
        <template #icon>
          <t-icon :name="menu.meta.icon" />
        </template>
        {{ menu.meta.title }}
      </t-menu-item>
      <t-submenu :value="menu.name" v-else>
        <template #icon>
          <t-icon :name="menu.meta.icon" />
        </template>
        <template #title>
          <span>{{ menu.meta.title }}</span>
        </template>
        <template v-for="(menuList, index) in menu.children" :key="index">
          <t-menu-item
            v-if="menuList.meta?.menu"
            :value="menuList.name"
            @click="goTo(menuList.name)"
          >
            {{ menuList.meta?.title }}
          </t-menu-item>
        </template>
      </t-submenu>
    </template>

    <template #operations>
      <div style="color: var(--td-text-color-disabled)">{{ mnuFootText }}</div>
    </template>
  </t-menu>
</template>
<script lang="ts" setup>
import router from '@/router'
import { computed, onMounted, reactive, ref } from 'vue'
import { type RouteRecordNormalized } from 'vue-router'
const props = defineProps<{
  collapsed: boolean
}>()

const defaultExpanded: unknown[] = []

const mnuFootText = computed(() => {
  return props.collapsed ? 'v0.9.0' : 'TDesign Starter 0.9.0'
})

const menuData: RouteRecordNormalized[] = reactive([])

const goTo = (name: string | symbol | undefined) => {
  router.push({ name })
}

// 过滤路由中需要显示的菜单
const filterMenu = (routeArr: RouteRecordNormalized[]) => {
  routeArr.map((route) => {
    if (route.meta?.menu && route.meta?.level === 0) {
      menuData.push(route)
      defaultExpanded.push(route.name)
    }
  })
}

onMounted(() => {
  const routeArr: RouteRecordNormalized[] = router.getRoutes()

  filterMenu(routeArr)
})
</script>
<style lang="scss" scoped></style>
