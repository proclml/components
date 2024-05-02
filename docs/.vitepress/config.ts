import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Awesome Vue3 components',
  description: 'A awesome vue3 components library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/cron' }
    ],

    sidebar: [
      {
        text: '组件',
        items: [{ text: 'cron表达式', link: '/components/cron' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
