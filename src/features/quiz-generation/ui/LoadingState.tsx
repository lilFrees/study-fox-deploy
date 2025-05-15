"use client";

import { Typography } from "antd";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface LoadingStateProps {
  progress: number;
}

function LoadingState({ progress }: LoadingStateProps) {
  const motionProgress = useMotionValue(0);
  const progressTransform = useTransform(motionProgress, (latest) => latest);

  useEffect(() => {
    motionProgress.set(progress);
  }, [progress, motionProgress]);

  return (
    <motion.div
      className="container mt-40 flex h-full w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
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
      <div className="relative mt-10 h-[20px] w-[500px] animate-pulse overflow-hidden rounded-xl bg-[#222]">
        <motion.div
          className="from-primary absolute h-full bg-gradient-to-r to-amber-500"
          style={{ width: `${progressTransform.get()}%` }}
        />
      </div>
    </motion.div>
  );
}

export default LoadingState;
