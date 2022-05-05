import App from '@/App.vue'
import i18n from '@/modules/i18n'
import router from '@/modules/router'
import { log } from '@/modules/utils'
import '@unocss/reset/tailwind.css'
import { createHead } from '@vueuse/head'
import 'uno.css'
import { createApp } from 'vue'
import './index.css'

log(BUILD_TIME)

createApp(App).use(router).use(i18n).use(createHead()).mount('#app')
