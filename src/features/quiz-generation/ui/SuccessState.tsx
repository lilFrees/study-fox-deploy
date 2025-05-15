import { motion } from "motion/react";

import { useQuizStore } from "@/entities/quiz/model/useQuizStore";
import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";

function SuccessState() {
  const { setMode, setStatus } = useQuizStore();
  const { push } = useRouter();
  return (
    <motion.div
      className="container mt-16 flex h-full w-full flex-col items-center justify-center gap-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Typography.Text className="text-2xl">
        ✅Your quiz is ready
      </Typography.Text>
      <Typography.Title level={2} className="text-[40px] font-bold">
        👇Click below to start
      </Typography.Title>
      <div className="flex w-full items-center justify-center gap-12">
        <Button
          size="large"
          type="primary"
          className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300"
          onClick={() => {
            setMode("timed");
            setStatus("pending");
            push("/quiz-play?mode=timed");
          }}
        >
          ⏲️Timed Mode
        </Button>
        <Button
          size="large"
          type="primary"
          className="w-full max-w-[450px] border-0 bg-slate-200 text-lg text-black hover:bg-slate-300"
          onClick={() => {
            setMode("normal");
            setStatus("pending");
            push("/quiz-play?mode=normal");
          }}
        >
          🧠Normal Mode
        </Button>
      </div>
    </motion.div>
  );
}

export default SuccessState;
