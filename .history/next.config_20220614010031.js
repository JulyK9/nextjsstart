/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/contact",
        destination: "https://nomadcoders.co",
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
