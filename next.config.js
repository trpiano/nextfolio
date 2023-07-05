const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
    loader: "default",
  },
  i18n: {
    locales: ['enUs', 'ptBr'],
    defaultLocale: 'ptBr'
  }
};

module.exports = nextConfig;
