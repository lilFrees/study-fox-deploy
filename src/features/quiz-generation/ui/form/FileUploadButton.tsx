import { Button } from "antd";
import { PiPaperclipHorizontal } from "react-icons/pi";

interface FileUploadButtonProps {
  onClick: () => void;
}

function FileUploadButton({ onClick }: FileUploadButtonProps) {
  return (
    <Button
      type="link"
      size="large"
      onClick={onClick}
      className="absolute top-2 left-0"
    >
      <PiPaperclipHorizontal className="rotate-90 text-lg text-black" />
    </Button>
  );
}

export default FileUploadButton;
