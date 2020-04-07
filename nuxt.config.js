import path from 'path'
import fs from 'fs'
const env = require('dotenv').config().parsed

export default {
  mode: 'universal',
  server: {
    port: 8000 // default: 3000
    // host: '0.0.0.0' // default: localhost
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: env.GOOGLE_SITE_VERIFICATION || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=1' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/libs/bootstrap/bootstrap.min.css?v=1'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/libs/fontawesome/css/all.min.css?v=1'
      }
    ]
  },
  serverMiddleware: ['~/serverMiddleware/selective.js'],

  /*
   ** Customize PWA
   */
  pwa: {
    manifest: {
      name: 'BrainNUXT',
      lang: 'br',
      display: 'standalone',
      description: 'BrainNuxt is a Boilerplate based in NuxtJS'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3b8070' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // Doc: https://nuxtjs.org/faq/google-analytics/
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
