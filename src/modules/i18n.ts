import type { Ref } from 'vue'
import { createI18n } from 'vue-i18n'
import { useStorage } from '@vueuse/core'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const defaultLocale = useStorage('locale', 'en') as Ref<string>

const i18n = createI18n({
  messages,
  legacy: false,
  locale: defaultLocale.value || 'en',
})

export default i18n
