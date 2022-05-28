<template>
  <div class="min-h-screen auto-cols-fr auto-rows-fr grid select-none place-items-center">
    <div class="cursor-pointer demo-hover-larger" :class="themeClass" @click="handleThemeChange" />
    <div class="cursor-pointer demo-hover-scale" @click="handleLocaleChange">
      {{ t('hello', { name }) }}
    </div>
    <div class="cursor-pointer i-heroicons-outline:arrow-left demo-hover-larger" @click="handleRouterChange" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '@/modules/dark'

// title
useHead({
  title: 'Demo',
})

// theme
const isDarkValue = $ref(isDark)
const themeClass = computed(() => (isDarkValue ? 'i-heroicons-outline:moon' : 'i-heroicons-outline:sun'))
const handleThemeChange = () => toggleDark()

// i18n
const { t, locale } = useI18n()
let localeValue = $ref(locale)
const name = computed(() => (localeValue === 'zh-CN' ? '世界' : 'World'))
const handleLocaleChange = () => (localeValue === 'zh-CN' ? (localeValue = 'en') : (localeValue = 'zh-CN'))
watch(locale, (locale) => (localStorage.locale = locale))

// router
const router = useRouter()
const handleRouterChange = () => router.push('/')
</script>

<style>
.demo-hover-scale {
  @apply transition ease-in-out duration-300 hover:scale-150;
}
.demo-hover-larger {
  @apply transition-all ease-in-out duration-300 hover:(w-12 h-12);
}
</style>
