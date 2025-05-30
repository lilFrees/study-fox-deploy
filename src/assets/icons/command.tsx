import { ReactElement } from "react";
import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";

const icon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 12H15.75C17.8211 12 19.5 13.6789 19.5 15.75C19.5 17.8211 17.8211 19.5 15.75 19.5C13.6789 19.5 12 17.8211 12 15.75V13.5H7.5V15.75C7.5 17.8211 5.82107 19.5 3.75 19.5C1.67893 19.5 0 17.8211 0 15.75C0 13.6789 1.67893 12 3.75 12H6V7.5H3.75C1.67893 7.5 0 5.82107 0 3.75C0 1.67893 1.67893 0 3.75 0C5.82107 0 7.5 1.67893 7.5 3.75V6H12V3.75C12 1.67893 13.6789 0 15.75 0C17.8211 0 19.5 1.67893 19.5 3.75C19.5 5.82107 17.8211 7.5 15.75 7.5H13.5V12ZM15.75 1.5C14.5074 1.5 13.5 2.50736 13.5 3.75V6H15.75C16.9926 6 18 4.99264 18 3.75C18 2.50736 16.9926 1.5 15.75 1.5ZM6 15.75C6 16.9926 4.99264 18 3.75 18C2.50736 18 1.5 16.9926 1.5 15.75C1.5 14.5074 2.50736 13.5 3.75 13.5H6V15.75ZM3.75 6H6V3.75C6 2.50736 4.99264 1.5 3.75 1.5C2.50736 1.5 1.5 2.50736 1.5 3.75C1.5 4.99264 2.50736 6 3.75 6ZM12 12H7.5V7.5H12V12ZM13.5 15.75C13.5 16.9926 14.5074 18 15.75 18C16.9926 18 18 16.9926 18 15.75C18 14.5074 16.9926 13.5 15.75 13.5H13.5V15.75Z"
      fill="currentColor"
    />
  </svg>
);

export default function CommandIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={icon} {...props} />;
}
