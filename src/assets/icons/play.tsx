import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 34 34"
    fill="none"
  >
    <path
      d="M13.3205 30.9999H21.7205C28.7205 30.9999 31.5205 28.1999 31.5205 21.1999V12.7999C31.5205 5.79991 28.7205 2.99991 21.7205 2.99991H13.3205C6.32051 2.99991 3.52051 5.79991 3.52051 12.7999V21.1999C3.52051 28.1999 6.32051 30.9999 13.3205 30.9999Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5205 21.9999L23.5205 16.9999L12.5205 11.9999" fill="none" />
    <path
      d="M12.5205 21.9999L23.5205 16.9999L12.5205 11.9999V21.9999Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PlayIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={icon} {...props} />;
}
