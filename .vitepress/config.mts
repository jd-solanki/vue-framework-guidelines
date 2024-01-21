import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Framework Guidelines",
  description: "Comprehensive guide on how to create perfect vue components",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Components', link: '/components/accordion', activeMatch: '/components/' }
    ],

    sidebar: {
      '/guide': [
        { text: 'Guide', link: '/guide/' },
        { text: 'Component Design', link: '/guide/component-design' },
        { text: 'Scenarios', link: '/guide/scenarios' },
      ],
      '/components': [
        { text: 'Accordion', link: '/components/accordion' },
        { text: 'Accordion Item', link: '/components/accordion-item' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jd-solanki/vue-framework-guidelines' }
    ]
  }
})
