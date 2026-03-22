/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "contra.com",
        pathname: "/static/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
