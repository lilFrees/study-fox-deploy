"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import { App, Button, Card, Form, Input, Typography } from "antd";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";

import { signInWithGoogle } from "@/features/auth/api/firebase-auth";
import { signUp } from "../api";

import { ISignUpForm } from "../types";
import { IUser } from "@/shared/types";

function SignUpPage() {
  const searchParams = useSearchParams();
  const [form] = Form.useForm<ISignUpForm>();
  const { message } = App.useApp();
  const { push } = useRouter();

  const handleGoogleSignUp = async () => {
    await signInWithGoogle();
  };

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signUp,
    onSuccess: async (data) => {
      message.success("You have successfully signed up");
      const user: IUser = {
        displayName: form.getFieldValue("firstName"),
        email: form.getFieldValue("email"),
        photoUrl: "",
        username: data.username,
      };

      await fetch("/api/set-token", {
        method: "POST",
        body: JSON.stringify({ token: data.jwtToken, user }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (searchParams.get("source") === "upload") {
        push("/quiz-generation");
      } else {
        push("/profile");
      }
    },
  });

  return (
    <Card
      className="w-full max-w-xl flex-col gap-4 p-6"
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
        Join Study Fox
      </Typography.Title>
      <Typography.Paragraph type="secondary" className="text-center">
        Please enter your details
      </Typography.Paragraph>
      <Form
        layout="vertical"
        form={form}
        className="flex flex-col gap-3"
        onFinish={(values) => signUpMutation({ ...values, lastName: "" })}
      >
        <Form.Item label="Your name" name="firstName">
          <Input size="large" color="#FFF" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input size="large" color="#FFF" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password size="large" />
        </Form.Item>
        <Button
          type="primary"
          className="mt-5 w-full"
          size="large"
          htmlType="submit"
          loading={isPending}
        >
          Create an account
        </Button>
      </Form>
      <Button
        className="mt-5 flex w-full items-center gap-2"
        size="large"
        type="text"
        onClick={handleGoogleSignUp}
      >
        <FcGoogle />
        Continue with Google
      </Button>
      <Typography.Paragraph className="text-center text-sm">
        Already have an account? Sign in{" "}
        <Link
          href={{
            pathname: "/auth/sign-in",
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

export default SignUpPage;
