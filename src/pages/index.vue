<template>
  <div class="h-screen auto-cols-fr auto-rows-fr grid place-items-center" @click="router.push('/demo')">
    <span className="cursor-pointer h-5 w-5 i-heroicons-outline:arrow-right hover:(h-8 w-8) " />
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
