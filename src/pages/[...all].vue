<template>
  <main class="h-screen grid place-items-center">
    <section class="v-stack space-y-8">
      <div class="font-bold text-2xl">Oops, 404 Page Not Found.</div>
      <a class="cursor-pointer space-x-4 color-base h-stack" @click="router.push('/')">
        <div class="h-5 w-5 i-heroicons-outline:arrow-left" />
        <span>{{ t('back_to_index_page') }}</span>
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
</script>
