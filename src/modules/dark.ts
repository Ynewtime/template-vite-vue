import { toggleDarkClass } from '@/modules/utils'
import { usePreferredDark, useStorage, useToggle } from '@vueuse/core'
import type { Ref } from 'vue'
import { computed, watch } from 'vue'

export const colorSchema = useStorage('color-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>

export const preferredDark = usePreferredDark()

export const isDark = computed({
  get() {
    return colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
  },
  set(v: boolean) {
    v === preferredDark.value ? (colorSchema.value = 'auto') : (colorSchema.value = v ? 'dark' : 'light')
  },
})

export const toggleDark = useToggle(isDark)

watch(isDark, toggleDarkClass, {
  immediate: true,
})
