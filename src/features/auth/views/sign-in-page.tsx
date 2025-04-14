"use client";

import { Button, Card, Form, Input, Typography } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { signInWithGoogle } from "@/features/auth/api/firebase-auth";

function SignInPage() {
  const searchParams = useSearchParams();
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
      <Form layout="vertical">
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
        >
          Sign in to your account
        </Button>
        <Button
          className="mt-5 flex w-full items-center gap-2"
          size="large"
          type="text"
          onClick={signInWithGoogle}
        >
          <FcGoogle />
          Continue with Google
        </Button>
      </Form>
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
