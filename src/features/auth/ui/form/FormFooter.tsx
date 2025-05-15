import { Typography } from "antd";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

import useAuthHandlers from "../../model/useAuthHandlers";

import GoogleAuthButton from "@/shared/ui/GoogleAuthButton";

interface FormFooterProps {
  type: "sign-in" | "sign-up";
}

function FormFooter({ type }: FormFooterProps) {
  const searchParams = useSearchParams();
  const { googleSignInMutation } = useAuthHandlers();

  return (
    <div>
      <GoogleAuthButton
        onClick={googleSignInMutation.mutate}
        isLoading={googleSignInMutation.isPending}
      />
      <Typography.Paragraph className="text-center text-sm">
        {type === "sign-up"
          ? "Already have an account? Sign in"
          : "Don&apos;t have account yet? Register"}
        <Link
          href={{
            pathname: type === "sign-up" ? "/auth/sign-in" : " /auth/sign-up",
            query: Object.fromEntries(searchParams.entries()),
          }}
          className="text-primary hover:text-primary/80 underline"
        >
          here
        </Link>
      </Typography.Paragraph>
    </div>
  );
}

export default FormFooter;
