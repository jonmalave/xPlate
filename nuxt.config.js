module.exports = {
  // Server 
  server: {
    host: 'localhost',
    port: 80
  },

  // Mode  
  mode: 'universal',

  // Headers of the page
  head: {
    title: 'xPlate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'minimal-ui, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { charset: 'utf-8' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'description', name: 'description', content: 'A Nuxt.js Boilerplate Project' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt, boilderplate, template' }  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 
  },

  // Customize the progress-bar color
  loading: { color: '#fff' },

  // Global CSS
  css: [
    { src: '~assets/fonts/fontawesome/css/all.min.css', lang: 'css' }
  ],

  // Plugins to load before mounting the App
  plugins: [
    '~/plugins/store.js'
  ],

  // Nuxt.js modules
  modules: [

  ],

  // Build configuration
  build: {
    // You can extend webpack config here
    extend(config, ctx) {

    }
  } 
}
