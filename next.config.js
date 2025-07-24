/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/coffe",
        destination: "/coffee",
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,
};
