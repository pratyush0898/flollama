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
  //   images: {
  //   remotePatterns: [new URL('www.gstatic.com')],
  // },
  reactStrictMode: false,
};
