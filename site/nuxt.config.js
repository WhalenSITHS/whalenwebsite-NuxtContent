export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'whalen',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_3(o).png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bungee&display=swap&text=MIKEWHALEN.TECH',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
    'nuxt-gsap-module',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faLaptopCode',
        'faPalette',
        'faMoon',
        'faSun',
        'faEnvelopeSquare',
      ],
      brands: [
        'faYoutube',
        'faJs',
        'faCss3Alt',
        'faGithubSquare',
        'faTwitterSquare',
        'faFacebookSquare',
      ],
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['resources.tag'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
