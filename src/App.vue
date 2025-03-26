<template>
  <component :is="componentChoose"></component>
</template>

<script setup lang="ts">
import { siderLayout, blank } from '@/layout/index'
import '@/style/layout.scss'
import { type Component, watch, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
const componentChoose: Component = shallowRef()
const route = useRoute()

watch(
  () => route,
  () => {
    console.log(route)
    if (!route.meta.hideLayout) {
      componentChoose.value = siderLayout
    } else {
      componentChoose.value = blank
    }
  },
  { deep: true },
)
</script>

<style scoped></style>
