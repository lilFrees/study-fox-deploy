"use client";

import { Divider, Typography } from "antd";

import { useAuthStore } from "@/entities/user/model/useAuthStore";
import QuickLinks from "./QuickLinks";
import ContinueLearning from "./continue/ContinueLearning";
import RecommendedQuizzes from "./recommended/RecommendedQuizzes";

function AccountHome() {
  const { user } = useAuthStore();
  return (
    <div className="mt-10 flex flex-col gap-10">
      <Typography.Title
        level={2}
        className="text-foreground text-3xl font-medium"
      >
        Welcome back,{" "}
        <span className="text-primary">
          {user?.displayName || user?.username}
        </span>
        ! Your progress is really good. Keep it up
      </Typography.Title>
      <Divider className="m-0" />
      <QuickLinks />
      <ContinueLearning />
      <RecommendedQuizzes />
    </div>
  );
}

export default AccountHome;
