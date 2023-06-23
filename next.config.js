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
};

module.exports = nextConfig;
