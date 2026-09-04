export default defineAppConfig({
  docus: {
    locale: 'en',
    colorMode: '',
  },
  header: {
    title: 'GO Documentation',
  },
  seo: {
    title: 'GO Documentation',
    titleTemplate: '%s - GO Documentation',
    description: 'Complete documentation for GO Shortener — an ultra-lightweight, standalone URL shortener in pure Go.',
  },
  github: {
    owner: 'ItsARCn',
    name: 'Go-shortner',
    url: 'https://github.com/ItsARCn/Go-shortner',
    branch: 'main',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'zinc',
    },
    pageHero: {
      slots: {
        container: 'flex flex-col lg:grid pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 lg:pb-6 gap-6 sm:gap-y-8',
      },
    },
    pageSection: {
      slots: {
        container: 'flex flex-col lg:grid pt-0 sm:pt-2 lg:pt-4 pb-16 sm:pb-24 lg:pb-32 gap-8 sm:gap-16',
      },
    },
  },
})

