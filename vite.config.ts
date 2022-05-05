import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'
import Unocss from 'unocss/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

export default defineConfig(() => {
  const baseConfig: UserConfig = {
    build: {
      target: 'esnext',
    },
    css: {
      postcss: {
        plugins: [require('postcss-nested')],
      },
    },
    define: {
      BUILD_TIME: JSON.stringify(new Date().toLocaleString()),
    },
    plugins: [
      Vue({
        reactivityTransform: true,
        script: { refSugar: true },
      }),
      Pages({
        extensions: ['vue', 'tsx'],
      }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: path.resolve(__dirname, 'src/locales/**'),
      }),
      VueJsx(),
      Unocss(),
    ],
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        { find: /^~/, replacement: '' },
      ],
    },
  }
  return baseConfig
})
