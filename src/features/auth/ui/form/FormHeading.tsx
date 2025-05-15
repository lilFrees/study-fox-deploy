import { Typography } from "antd";

interface FormHeadingProps {
  type: "sign-in" | "sign-up";
}

function FormHeading({ type }: FormHeadingProps) {
  return (
    <div className="spacey-4">
      <Typography.Title level={2} className="mb-0 text-center font-sans">
        {type === "sign-in" ? "Welcome back" : "Join Study Fox"}
      </Typography.Title>
      <Typography.Paragraph type="secondary" className="text-center">
        Please enter your details
      </Typography.Paragraph>
    </div>
  );
}

export default FormHeading;
