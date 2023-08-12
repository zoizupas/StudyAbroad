module.exports = {
  title: 'Mediumish',
  base: '/My-theme-mediumish/',
  description: 'Blog example for Mediumish theme with VuePress',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),

  themeConfig: {
  authors: [
      {
      name: 'Sal',
      avatar: '/assets/img/sal.jpg',
      link: 'https://wowthemes.net/donate',
      linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
  wallet_address: [
      {
        name: 'btc',
        wallet_address: '18btPsR3tR1S8nRuQJmH2TEnsoun8DVypr',
        wallet_qrcode: '/assets/img/btc.jpg'
      },
      {
        name: 'eth',
        wallet_address: '0x042f174e1405d5f2eac14b33a6d6abe2075f4402',
        wallet_qrcode: '/assets/img/eth.jpg'
      },
      {
        name: 'USDT',
        wallet_address: 'TCrXf4v8P9L5GoW3DVRu9a9MTSmi7QwqxV',
        wallet_qrcode: '/assets/img/bch.jpg'
      },
      // Add address configurations for other cryptocurrencies
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: 'https://www.facebook.com/profile.php?id=61550291663330',
        },
        {
          type: 'github',
          link: 'https://github.com/zoizupas/StudyAbroad',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/isumey/',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: '#',
        },
        {
          type: 'web',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: '亞歷山大',
          link: 'https://hackmd.io/7yJDy0rzRYudjlHUyZDqRw?edit',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'gmail',
      shortname: 'demowebsite',
    },
    newsletter: {
      endpoint: 'https://hackmd.io/7yJDy0rzRYudjlHUyZDqRw?edit'
    },
    feed: {
      canonical_base: 'https://hackmd.io/7yJDy0rzRYudjlHUyZDqRw?edit',
    },
    smoothScroll: true
  },
}
