import { Button } from "antd";
import { BsStars } from "react-icons/bs";

interface GenerateButtonProps {
  onClick: () => void;
}

function GenerateButton({ onClick }: GenerateButtonProps) {
  return (
    <Button
      size="large"
      className="absolute top-2 right-2 rounded-[10px] bg-black text-white"
      type="primary"
      icon={<BsStars className="text-lg" />}
      onClick={onClick}
    >
      Generate
    </Button>
  );
}

export default GenerateButton;
