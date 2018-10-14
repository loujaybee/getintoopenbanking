module.exports = {
  title: 'Get Into Open Banking',
  description: 'Tutorials / Guides on Open Banking',
  home: true,
  ga: 'UA-60078804-4',
  themeConfig: {
    sidebar: [
      {
        title: 'Get Into Open Banking',
        collapsable: false,
        children: [
          '/docs/intro',
          '/docs/roadmap'
        ]
      },
      {
        title: 'Understanding Open Banking',
        collapsable: false,
        children: [
          '/docs/whatisopenbanking',
          '/docs/techlandscape',
          '/docs/thirdparties',
        ]
      },
      {
        title: 'Third Party Providers',
        collapsable: false,
        children: [
          '/docs/becomingatpp.md',
          '/docs/faqs'
        ]
      },
      {
        title: 'Learn More',
        collapsable: false,
        children: [
          '/docs/events',
          '/docs/resources'
        ]
      }
    ]
  }
}