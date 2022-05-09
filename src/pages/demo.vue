<template>
  <div class="min-h-screen auto-cols-fr auto-rows-fr grid select-none place-items-center">
    <div class="cursor-pointer hover:(h-8 w-8)" :class="themeClass" @click="handleThemeChange" />
    <div class="cursor-pointer hover:text-xl" @click="handleLocaleChange">{{ t('hello', { name }) }}</div>
    <div class="cursor-pointer i-heroicons-outline:arrow-left hover:(h-8 w-8)" @click="handleRouterChange" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch, computed } from 'vue'
import { $ref } from 'vue/macros'
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
