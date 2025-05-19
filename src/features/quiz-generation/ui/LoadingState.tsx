"use client";

import { Typography } from "antd";
import { motion } from "motion/react";

interface LoadingStateProps {
  progress: number;
}

function LoadingState({ progress }: LoadingStateProps) {
  return (
    <motion.div
      className="container mt-40 flex h-full w-full flex-col items-center justify-center"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <Typography.Title
        level={2}
        className="text-primary font-sans text-[64px] uppercase"
      >
        Study Fox
      </Typography.Title>
      <Typography.Text className="animate-pulse font-sans text-xl uppercase">
        quiz is generating...
      </Typography.Text>
      <div className="relative mt-10 h-[20px] w-[500px] overflow-hidden rounded-xl bg-[#222]">
        <motion.div
          className="from-primary absolute h-full bg-gradient-to-r to-amber-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

export default LoadingState;
