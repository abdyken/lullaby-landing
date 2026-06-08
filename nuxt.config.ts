// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    // Self-host the fonts at build time: no runtime requests to Google,
    // faster first paint, and GDPR-friendly.
    download: true,
    inject: true,
    display: 'swap',
    families: {
      // Display / heading serif — elegant nighttime aesthetic.
      Newsreader: {
        ital: [400, 500],
        wght: [400, 500, 600]
      },
      // Body / UI sans — soft geometric, readable at 3 AM.
      'Hanken Grotesk': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23D9805F'/%3E%3Cmask id='f'%3E%3Crect width='64' height='64' fill='white'/%3E%3Ccircle cx='33.5' cy='30' r='11.5' fill='black'/%3E%3C/mask%3E%3Ccircle cx='43' cy='31' r='12.5' fill='%23F7F0E5' mask='url(%23f)'/%3E%3Cpath fill='none' stroke='%23F7F0E5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' d='M22 22 C18 14 27 9 30 15 C32 19 28 22 27 25 C26 31 27 36 29 40 C30 44 24 46 23 42 C22 38 31 40 36 41'/%3E%3C/svg%3E" }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false }
})
