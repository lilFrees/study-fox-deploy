import { Card } from "antd";

interface AuthCardProps {
  children: React.ReactNode;
}

function AuthCard({ children }: AuthCardProps) {
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
      {children}
    </Card>
  );
}

export default AuthCard;
