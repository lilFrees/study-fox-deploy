import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["antd", "@ant-design/nextjs-registry"],
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyAM4xWoDZrb2B4l6_-mdw9Vo5ENgv_fCNY",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "study-fox-f9b27.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "study-fox-f9b27",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "study-fox-f9b27.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGESENDER_ID: "38242968511",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:38242968511:web:f31c5c94bce56401ba770a",
    NEXT_PUBLIC_FIREBASE_MEASURMENT_ID: "G-WZLEPG0R6G",
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
