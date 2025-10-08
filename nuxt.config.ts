
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'src/',
  // css: [
  //   '@/assets/styles/main.css'
  // ],
  modules: ['@nuxt/ui', '@nuxt/image'],


  extends: [
    [
      'github:almuz/nuxt-layer-test#master',
      {
        install: true,
      }
    ]
  ]
})