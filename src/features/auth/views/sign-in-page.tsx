"use client";

import { App, Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithGoogle,
  signInWithPassword,
} from "@/features/auth/api/auth-handlers";
import { useMutation } from "@tanstack/react-query";
import { ISignInForm } from "../types";

function SignInPage() {
  const searchParams = useSearchParams();
  const { message } = App.useApp();
  const [form] = Form.useForm<ISignInForm>();
  const { push } = useRouter();

  const { mutate: googleSignUpMutate, isPending: isGooglePending } =
    useMutation({
      mutationKey: ["sign-in"],
      mutationFn: signInWithGoogle,
      onSuccess: async () => {
        message.success("You have successfully signed in");
        if (searchParams.get("source") === "upload") {
          push("/quiz-generation");
        } else {
          push("/profile");
        }
      },
    });

  const { mutate: signInMutate, isPending } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signInWithPassword,
    onSuccess: async () => {
      message.success("You have successfully signed in");
      if (searchParams.get("source") === "upload") {
        push("/quiz-generation");
      } else {
        push("/profile");
      }
    },
  });

  return (
    <Card
      className="w-full max-w-xl p-6"
      variant="borderless"
      styles={{
        body: {
          padding: "0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        },
      }}
    >
      <Typography.Title level={2} className="mb-0 text-center font-sans">
        Welcome back
      </Typography.Title>
      <Typography.Paragraph type="secondary" className="text-center">
        Please enter your details
      </Typography.Paragraph>
      <Form
        layout="vertical"
        form={form}
        onFinish={signInMutate}
        className="flex flex-col gap-3"
      >
        <Form.Item label="Email" name="email">
          <Input size="large" color="#FFF" />
        </Form.Item>
        <Form.Item name="password" label="Password" className="mt-5">
          <Input.Password size="large" />
        </Form.Item>
        <Button
          type="primary"
          className="mt-5 w-full"
          size="large"
          htmlType="submit"
          loading={isPending}
        >
          Sign in to your account
        </Button>
      </Form>
      <Button
        className="mt-5 flex w-full items-center gap-2"
        size="large"
        type="text"
        onClick={() => googleSignUpMutate()}
        loading={isGooglePending}
      >
        <FcGoogle />
        Continue with Google
      </Button>
      <Typography.Paragraph className="text-center text-sm">
        Don&apos;t have account yet? Register{" "}
        <Link
          href={{
            pathname: "/auth/sign-up",
            query: Object.fromEntries(searchParams.entries()),
          }}
          className="text-primary hover:text-primary/80 underline"
        >
          here
        </Link>
      </Typography.Paragraph>
    </Card>
  );
}

export default SignInPage;
