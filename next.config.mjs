/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.kientrucsonganh.vn",
      },
    ],
  },
};

export default nextConfig;