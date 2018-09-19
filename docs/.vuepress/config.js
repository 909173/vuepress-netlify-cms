module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'andreliem/vuepress-netlify-cms',
    sidebar: [
      '/',
      '/welcome',
      '/test',
      '/テスト投稿'
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}
