const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'kubecube front components',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#508ae2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/logo.png',
    nav: [
      {
        text: 'Common Components',
        link: '/common-components/'
      },
      {
        text: 'KubeCube-front',
        link: 'https://github.com/kubecube-io/kubecube-front'
      },
      {
        text: 'JChart',
        link: 'https://github.com/wt911122/JChart'
      }
    ],
    sidebar: {
      '/common-components/': [
        {
          title: 'Common Components',
          collapsable: false,
          children: [
            '',
            'kubetable',
            'x-request',
            'kubedynamic',
            'kubeformtab',
            'kubetree',
            'kubepipe'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    require('./alias.js'),
  ]
}
