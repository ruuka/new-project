export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bioinformatics-data-hub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/plotly.client.js',
    { src: '~/plugins/vue-tags-input', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/layout_components'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
  ],
  vendor: ['@johmun/vue-tags-input'],

  tailwindcss: {
    // Options
  },

  /*
   ** Font Awesome Fonts to Include
   */
  fontawesome: {
    proIcons: {
      solid: [
        'faHome',
        'faClinicMedical',
        'faSearch',
        'faBooks',
        'faQuestionCircle',
        'faEnvelope',
        'faChartLine',
        'faUndo',
        'faPlus',
      ],
      regular: [
        'faHome',
        'faClinicMedical',
        'faSearch',
        'faBooks',
        'faQuestionCircle',
        'faEnvelope',
        'faChartLine',
        'faUndo',
        'faAngleDown',
        'faPlus',
        'faFilter',
        // 'faFilterSlash',
        'faGlobe',
        'faTimes',
        'faGlobeAmericas',
      ],
      duotone: ['faUserFriends', 'faAtlas'],
    },
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: {
        wght: [200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // axios: {
  //   baseURL: process.env.VUE_LOCAL_API_URL,
  //   browserBaseURL: process.env.VUE_APP_API_URL,
  // },
  // privateRuntimeConfig: {
  //   axios: {
  //     https: false,
  //     baseURL: process.env.VUE_LOCAL_API_URL,
  //   },
  // },

  googleAnalytics: {
    id: 'UA-113759967-2',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { analyze: false },
}
