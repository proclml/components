import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'proclml',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue3 Components', link: '/components/cron' },
    ],

    sidebar: [
      {
        text: 'Vue3 Components',
        items: [
          { text: 'CronExpression', link: '/components/cron' },
          { text: 'ExpansionPanel', link: '/components/expansion-panel' },
          { text: 'MonacoEditor', link: '/components/monaco-editor' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
