<template>
  <main class="h-screen grid place-items-center">
    <section class="flex flex-col space-y-8 items-center justify-center">
      <div class="font-bold text-2xl">Oops, 404 Page Not Found.</div>
      <a class="cursor-pointer space-x-4 text-base hstack" @click="router.push('/')">
        <div class="h-5 w-5 heroicons-outline:arrow-left" />
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
