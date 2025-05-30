import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M8 2H17C19 2 20 3 20 5V6.38"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FolderIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={icon} {...props} />;
}
