<template>
  <t-layout :class="`${sider}-layout`">
    <t-aside :class="isCollapsed">
      <div :class="`${sider}-icon`">
        <t-image :src="ProductCIcon" :style="{ width: '40px', height: '40px' }" />
        <div :class="`${sider}-title-text`" v-show="!collapsed">t-design-vue3</div>
      </div>
      <div :class="`${sider}-menu`">
        <Menu :collapsed="collapsed" />
      </div>
    </t-aside>

    <t-layout>
      <t-header>
        <div :class="`${sider}-header`">
          <Header @changeCollapsed="changeCollapsed" />
        </div>
      </t-header>
      <t-content :class="`${sider}-content`">
        <t-breadcrumb :max-item-width="'150'">
          <t-breadcrumbItem v-for="item in options" :key="item.to" :to="item.to">
            {{ item.content }}
          </t-breadcrumbItem>
        </t-breadcrumb>
        <div :class="`${sider}-view`">
          <router-view v-if="route.meta.level === 2">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in" appear>
                <component :is="Component" />
              </transition>
            </router-view>
          </router-view>
          <router-view v-else v-slot="{ Component }">
            <transition name="fade" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </t-content>
      <!-- <t-footer>Footer</t-footer> -->
    </t-layout>
  </t-layout>
</template>
<script lang="ts" setup>
import { sider } from '@/config/global'
import { computed, reactive, ref, watch } from 'vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import ProductCIcon from '@/assets/logo.svg'
import { useRoute, type RouteRecordNormalized } from 'vue-router'

const collapsed = ref<boolean>(false)

const route = useRoute()

// 侧边栏是否折叠
const isCollapsed = computed(() => {
  return collapsed.value ? `${sider}-aside-collapsed` : `${sider}-aside`
})

const options = reactive<{ content: string; to: string }[]>([])

const changeCollapsed = () => {
  collapsed.value = !collapsed.value
}

// 找出路由链
const filterRoute = (routeArr: RouteRecordNormalized[], level: number = 0) => {
  routeArr.forEach((item: RouteRecordNormalized) => {
    if (Number(item.meta.level) < level) {
      options.push({ content: item.meta.title as string, to: item.path as string })
    } else {
      if (item?.children && item?.children?.length !== 0) {
        filterRoute(item.children as RouteRecordNormalized[], 2)
      }
    }
    if (Number(item.meta.level) === level) {
      if (route.name === item.name) {
        options.push({ content: item.meta.title as string, to: item.path as string })
        return
      }
    }
  })
}

watch(
  () => route,
  () => {
    options.length = 0
    filterRoute(route.matched, route.meta.level as number)
  },
  { deep: true, immediate: true },
)
</script>
<style lang="scss" scoped>
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.28s cubic-bezier(0.38, 0, 0.24, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
