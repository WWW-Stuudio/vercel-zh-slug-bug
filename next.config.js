module.exports = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/%e5%8d%9a%e5%ae%a2',
        destination: 'en/blog',
      },
      {
        source: '/%e5%8d%9a%e5%ae%a2/:slug*',
        destination: 'en/blog/:slug*',
      },
    ]
  },
}
