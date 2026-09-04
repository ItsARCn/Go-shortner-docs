export default defineNuxtConfig({
  extends: ['docus'],
  // @ts-ignore
  docus: {
    assistant: {
      enabled: false,
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icon-192.png' },
      ],
    },
  },
})
