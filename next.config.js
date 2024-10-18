const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "nextfolio-db.vercel.app",
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
  i18n: {
    locales: ["enUs", "ptBr"],
    defaultLocale: "ptBr",
  },
};

module.exports = nextConfig;
