import withMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["lucide-react"],
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const nextConfigWithMDX = withMDX(nextConfig);

export default nextConfigWithMDX;
