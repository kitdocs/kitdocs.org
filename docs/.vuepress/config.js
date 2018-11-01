
const locales = {
  'zh': {
    site: {
      lang: 'zh-CN',
      title: 'KitDocs.org',
      description: '致力于提供一个好用的知识文档库',
    },
    news: '资讯',
    topic: '知识库',
    docs: '开发文档',
    favorite: '收藏',
    community: '社区',
    tags: '标签',
    neitui: '内推',
    markdown: 'Markdown',
    feature: 'feature',
  },
  // 'en': {
  //   site: {
  //     lang: 'en-US',
  //     title: 'KitDocs.org',
  //     description: 'Dedicated to Docs and its awesome community'
  //   },
  //   news: 'news',
  //   topic: 'topic',
  //   docs: 'docs',
  //   community: 'community',
  // },
}

module.exports = {
  dest: 'dist',
  locales: {
    '/': locales['zh'].site,
    // '/en': locales['en'].site,
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: {
    updatePopup: true // Boolean | Object, 默认值是 undefined.
  },
  // theme: 'ads',
  themeConfig: {
    sidebarDepth: 3,
    repo: 'kitdocs/kitdocs.org',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    algolia: {
      apiKey: 'e6bcd0241fa598b7462a1b6c542e979b',
      indexName: 'kitdocs.org',
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: require('./nav/zh'),
        // sidebar: {
        //   '/news/': getGuideSidebar('指南', '深入'),
        //   '/topic/': getPluginSidebar('插件', '介绍'),
        //   // '/theme/': getThemeSidebar('主题', '介绍'),
        // },
        sidebar: {
          ...genSidebarConfig('zh'),
        },
      },
    },
  },
  // yarn add @vuepress/plugin-i18n-ui @vuepress/plugin-back-to-top @vuepress/plugin-pwa @vuepress/plugin-medium-zoom @vuepress/plugin-notification flowchart --dev
  plugins: {
    // '@vuepress/plugin-i18n-ui': true,
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/plugin-pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/plugin-medium-zoom': true,
    '@vuepress/plugin-notification': true,
    'flowchart': true
  },
  // clientRootMixin: path.resolve(__dirname, 'mixin.js')
  chainWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
    config.module
      .rule('webp')
      .test(/\.webp$/)
      .use('webp-loader')
        .loader('webp-loader')
        .end()

    config.module
      .rule('webp')
      .test(/\.webp$/)
      .use('file-loader')
        .loader('file-loader')
        .end()
  },
  markdown: {
    config: md => {
      md.set({ breaks: true })
      // md.use(require('markdown-it-mark'))
      // md.use(require('markdown-it-checkbox'))
      // md.use(require('markdown-it-deflist'))
      // md.use(require("markdown-it-katex"))
      // md.use(require("markdown-it-plantuml"))

      // md.use(require('markdown-it-prettier'))
      // // md.use(require('markdown-it-mathjax'))
      // md.use(require('markdown-it-highlightjs'))
      // md.use(require("markdown-it-mermaid"), {

      // })
      // https://stackedit.io/app#
      // https://www.npmjs.com/package/katex
      // md.use(require('katex'))
      // https://www.npmjs.com/package/mermaid
      // md.use(require('mermaid'))
      // https://mermaidjs.github.io/gantt.html
      // md.use(require('markdown-it-mermaid-pro'))
      // md.use(require('@iktakahiro/markdown-it-katex'))
    }
  },
}

function genSidebarConfig(lang) {
  const t = locales[lang];
  return {
    '/news/': [
      {
        title: t['news'],
        collapsable: true,
        children: [
          '',
        ]
      },
    ],
    '/topic/': [
      {
        title: t['topic'],
        collapsable: true,
        children: [
          ['', '介绍'],
          '',
          'growth/',
          'miniapp/',
          'git/',
          'html/',
          'css/',
          'javascript/',
          'nodejs/',
          'ECMAScript/',
          'vue/',
          'algorithm/',
          'benchmark/',
          'performance/',
          'markdown/',
          // 'test/',
          // 'vim/',
          // 'nodejs/',
          // 'rxjs/',
          // 'linux/',
          // 'browser/',
          // 'http/',
        ]
      },
    ],
    '/docs/': [
      {
        title: t['docs'],
        collapsable: true,
        children: [
          '',
          // 'frontend',
          // 'backend',
          // 'database',
        ]
      },
    ],
    // '/tags/': [
    //   {
    //     title: t['tags'],
    //     collapsable: true,
    //     children: [
    //       '',
    //     ]
    //   },
    // ],
    // '/tags',
    '/favorite/': [
      {
        title: t['favorite'],
        collapsable: true,
        children: [
          '',
        ]
      },
    ],
    // fallback
    // '/': [
    //   // ['', '首页'],        /* / */
    //   '',        /* / */
    //   'about',   /* /about.html */
    //   'contact', /* /contact.html */
    //   'weekly',  /* /weekly.html */
    // ],
  };
}
