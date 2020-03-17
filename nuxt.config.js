const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const config = {
  head: {
    title: 'andmohiko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'andmohiko.dev' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", type: 'image/x-icon', href: "/apple-icon-180x180.png" },
      // { rel: "icon", type: 'image/x-icon', sizes: "192x192 },
      // { rel: "icon", type: 'image/x-icon', sizes: "32x32 },
      // { rel: "icon", type: 'image/x-icon', sizes: "96x96 },
      // { rel: "icon", type: 'image/x-icon', sizes: "16x16 },
    ],
    css: [
      '~/assets/style/reset.css',
      '~/assets/style/slug_body.css'
    ],
  },

  // Customize the progress bar color
  loading: { color: '#3B8070' },

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  plugins: [{ src: '~plugins/contentful' }],

  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true
  },

  generate: {
    routes() {
      return cdaClient.getEntries({
        'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
      }).then(entries => {
        return [
          ...entries.items.map(entry => `/blog/${entry.fields.slug}`)
        ]
      })
    }
  },

  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config