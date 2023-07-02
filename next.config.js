/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/recipe",
        destination: "https://dinnerfy-ds-production.up.railway.app/recipe",
      },
    ];
  },
};

module.exports = nextConfig;
