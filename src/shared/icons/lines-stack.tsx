import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const defaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 39"
    fill="none"
  >
    <line
      x1="0.72265"
      y1="10.584"
      x2="15.7226"
      y2="0.583975"
      stroke="currentColor"
    />
    <line
      x1="0.72265"
      y1="17.584"
      x2="15.7226"
      y2="7.58398"
      stroke="currentColor"
    />
    <line
      x1="0.72265"
      y1="24.584"
      x2="15.7226"
      y2="14.584"
      stroke="currentColor"
    />
    <line
      x1="0.72265"
      y1="31.584"
      x2="15.7226"
      y2="21.584"
      stroke="currentColor"
    />
    <line
      x1="0.72265"
      y1="38.584"
      x2="15.7226"
      y2="28.584"
      stroke="currentColor"
    />
  </svg>
);

export default function LineStackIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={defaultIcon} {...props} />;
}
