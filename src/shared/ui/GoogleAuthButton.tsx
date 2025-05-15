import { Button } from "antd";
import { FcGoogle } from "react-icons/fc";

interface GoogleAuthButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
}

function GoogleAuthButton({ onClick, isLoading }: GoogleAuthButtonProps) {
  return (
    <Button
      className="mt-5 flex w-full items-center gap-2"
      size="large"
      type="text"
      onClick={onClick}
      loading={isLoading}
    >
      <FcGoogle />
      Continue with Google
    </Button>
  );
}

export default GoogleAuthButton;
