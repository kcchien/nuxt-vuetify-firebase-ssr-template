module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Vuetify Firebase SSR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Custom CSS
   */
  css: [
    '~assets/styles/vuetify.styl'
  ],
  /**
   * Plugins
   */
  plugins: [],
  /**
   * Modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/browserconfig',
    '@nuxtjs/component-cache',
    '@nuxtjs/sitemap'
    /* ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXX-X'
    }]*/
  ],
  /**
   * Project source files directory
   */
  srcDir: 'src',
  /**
   * Build-generated files directory
   */
  buildDir: 'functions/.nuxt',
  /*
  ** Build configuration
  */

  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /**
     * Babel configuration
     */
    babel: {
      'presets': [
        ['env', {
          "targets": {
            "node": "8.11.4"
          }
        }],
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          'polyfill': true,
          'regenerator': true,
          'moduleName': 'babel-runtime'
        }]
      ]
    }
  }
};

