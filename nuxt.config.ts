// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23D9805F'/%3E%3Cmask id='f'%3E%3Crect width='64' height='64' fill='white'/%3E%3Ccircle cx='33.5' cy='30' r='11.5' fill='black'/%3E%3C/mask%3E%3Ccircle cx='43' cy='31' r='12.5' fill='%23F7F0E5' mask='url(%23f)'/%3E%3Cpath fill='none' stroke='%23F7F0E5' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' d='M22 22 C18 14 27 9 30 15 C32 19 28 22 27 25 C26 31 27 36 29 40 C30 44 24 46 23 42 C22 38 31 40 36 41'/%3E%3C/svg%3E" },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
