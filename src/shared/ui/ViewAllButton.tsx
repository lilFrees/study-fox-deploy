"use client";

import { CaretRightOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

function ViewAllButton(props: ButtonProps) {
  return (
    <Button
      type="text"
      className="text-primary flex items-center gap-2 text-[20px]"
      {...props}
    >
      View all
      <CaretRightOutlined />
    </Button>
  );
}

export default ViewAllButton;
