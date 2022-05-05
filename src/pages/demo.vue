<template>
  <div class="min-h-screen auto-cols-fr auto-rows-fr grid select-none place-items-center">
    <div :class="themeClass" @click="() => toggleDark()" />
    <div class="cursor-pointer hover:text-xl" @click="toggleLocale">{{ t('hello', { name }) }}</div>
    <div class="cursor-pointer heroicons-outline:arrow-left hover:(h-8 w-8)" @click="router.push('/')" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { watch, computed } from 'vue'
import { $ref } from 'vue/macros'
import { useHead } from '@vueuse/head'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '@/modules/dark'
import { classNames } from '@/modules/utils'

// title
useHead({
  title: 'Demo',
})

// theme
const isDarkValue = $ref(isDark)
const themeClass = computed(() =>
  classNames('cursor-pointer hover:(h-8 w-8)', isDarkValue ? 'heroicons-outline:moon' : 'heroicons-outline:sun'),
)

// i18n
const { t, locale } = useI18n()
const name = computed(() => (locale.value === 'zh-CN' ? '世界' : 'World'))
const toggleLocale = () => (locale.value === 'zh-CN' ? (locale.value = 'en') : (locale.value = 'zh-CN'))
watch(locale, (locale) => (localStorage.locale = locale))

// router
const router = useRouter()
</script>
