export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'pt-BR',
    },
    title: 'Samuel Leonel | Desenvolvedor Front-End',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Samuel Leonel - desenvolvedor Front-End. Desenvolvendo soluções muito além do código' },
      { name: "google-site-verification", content: "RT5rLLKWiYz20xICLDotAhNniqo7a5seyiqWfxEW7Qw" },
      { name: 'keywords', content: 'Samuel, Samuel Leonel, Desenvolvedor, Web, Portfólio, Front-end, UX, UI, Mobile' },
      { name: 'author', content: 'Samuel Leonel' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  webfontloader: {
    google: {
      families: ['Lato:wght@400;700;900&display=swap'] //Loads Lato font with weights 400 and 700
    }
  },
  css: [
    '~/assets/scss/global.scss',
    '@/node_modules/sal.js/dist/sal.css'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    "@nuxtjs/svg",
    "@nuxtjs/google-analytics"
  ],
  googleAnalytics: {
    id: "UA-178383535-1"
  },
  axios: {},
  build: {
  }
}
