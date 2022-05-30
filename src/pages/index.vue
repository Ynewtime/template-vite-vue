<template>
  <div class="h-screen auto-cols-fr auto-rows-fr grid place-items-center" @click="router.push('/demo')">
    <span className="cursor-pointer i-heroicons-outline:arrow-right demo-hover-larger" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'

const router = useRouter()
const title = 'Vite Vue'
useHead({
  title,
})
</script>
