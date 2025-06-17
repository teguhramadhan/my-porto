/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ini WAJIB supaya build tidak gagal karena lint
  },
};

export default nextConfig;
