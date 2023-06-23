const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
