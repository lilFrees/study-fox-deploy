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
      d="M8 2V5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2V5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 9.09H20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.21 15.77L15.6701 19.31C15.5301 19.45 15.4 19.71 15.37 19.9L15.18 21.25C15.11 21.74 15.45 22.08 15.94 22.01L17.29 21.82C17.48 21.79 17.75 21.66 17.88 21.52L21.4201 17.98C22.0301 17.37 22.3201 16.66 21.4201 15.76C20.5301 14.87 19.82 15.16 19.21 15.77Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.7002 16.28C19.0002 17.36 19.8402 18.2 20.9202 18.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9955 13.7H12.0045"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.29431 13.7H8.30329"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.29431 16.7H8.30329"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CalendarEditIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={icon} {...props} />;
}
