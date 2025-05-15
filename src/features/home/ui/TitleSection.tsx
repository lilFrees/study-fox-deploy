import { Typography } from "antd";

function TitleSection() {
  return (
    <div className="space-y-4">
      <Typography.Title
        level={1}
        className="max-w-[15ch] font-mono text-6xl leading-[66px] font-normal"
      >
        Study Smarter with <span className="text-primary">AI-Powered</span>{" "}
        Learning Tools
      </Typography.Title>
      <Typography.Paragraph className="text-base" type="secondary">
        Generate Quizzes from Your Study Materials Instantly
      </Typography.Paragraph>
    </div>
  );
}

export default TitleSection;
