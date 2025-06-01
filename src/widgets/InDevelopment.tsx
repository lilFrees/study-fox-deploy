"use client";
import Image from "next/image";

import image from "@/assets/in_development.png";
import { Typography } from "antd";

function InDevelopment() {
  return (
    <div className="mt-[10%] flex h-full w-full flex-col items-center justify-center text-center">
      <Typography.Title level={2} className="mb-4">
        This feature is currently in development
      </Typography.Title>
      <Image
        src={image}
        alt="In development"
        className=""
        height={300}
        width={500}
      />
    </div>
  );
}

export default InDevelopment;
