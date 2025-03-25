import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["antd", "@ant-design/nextjs-registry"],
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
