/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dosguo3sg/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/portfolio/software/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
