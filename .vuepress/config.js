module.exports = {
  title: 'Get Into Open Banking',
  description: 'Tutorials / Guides on Open Banking',
  home: true,
  base: '/',
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
          '/docs/thirdparties',
          '/docs/oauth',
          '/docs/resources'
        ]
      },
      {
        title: 'Info For Third Parties',
        collapsable: false,
        children: [
          '/docs/faqs'
        ]
      },
      {
        title: 'Get Involved',
        collapsable: false,
        children: [
          '/docs/events'
        ]
      }
    ]
  }
}