// import colors from 'vuetify/es5/util/colors'
//
// export default {
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,
//
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     titleTemplate: '%s - office_catering_platform_backend',
//     title: 'office_catering_platform_backend',
//     htmlAttrs: {
//       lang: 'en'
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },
//
//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//   ],
//
//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//   ],
//
//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,
//
//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     // https://go.nuxtjs.dev/vuetify
//     '@nuxtjs/vuetify',
//   ],
//
//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//   ],
//
//   // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
//   vuetify: {
//     customVariables: ['~/assets/variables.scss'],
//     theme: {
//       dark: true,
//       themes: {
//         dark: {
//           primary: colors.blue.darken2,
//           accent: colors.grey.darken3,
//           secondary: colors.amber.darken3,
//           info: colors.teal.lighten1,
//           warning: colors.amber.base,
//           error: colors.deepOrange.accent4,
//           success: colors.green.accent3
//         }
//       }
//     }
//   },
//
//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   }
// }

import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - food-truck',
    title: 'food-truck',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: ''},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&amp;display=swap',
      },
    ],
  },

  mode: 'spa',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/foodtruck.scss"],

  router: {
    middleware: 'auth', // Use the 'auth' middleware globally
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    {src: '~/plugins/persistedState.js', mode: 'client'},
    {src: '@/plugins/vue-html2pdf', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/session'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  axios: {
    baseURL: process.env.VUE_APP_BASE_URL, // Used as fallback if no runtime config is provided
  },
  env: {
    baseUrl: process.env.API_URL,
    mediaUrl: process.env.VUE_APP_MEDIA_URL
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.VUE_APP_BASE_URL
  //   }
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
    },
    treeShake: true,
    theme: {
      light: true,

      themes: {
        light: {
          primary: '#8c52ff',
          // accent: '#0F3460',
          secondary: '#0F3460',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#FF5353',
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        // ["@babel/plugin-proposal-class-properties", { "loose": true }],
        // ["@babel/plugin-proposal-private-methods", { "loose": true }],
        // ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }
  }
}
