import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const defaultIcon = (gradientcolor: "blue" | "orange") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="460"
    height="716"
    viewBox="0 0 460 716"
    fill="none"
  >
    <defs>
      <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3718" />
        <stop offset="100%" stopColor="#FF996D" />
      </linearGradient>
      <linearGradient
        id="blueGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#7F60F9" />
        <stop offset="100%" stopColor="#6DDCFF" />
      </linearGradient>
    </defs>
    <path
      d="M231.337 138.487C351.232 84.2639 385.958 -99.3266 448.192 70.5618C510.426 240.45 296.182 655.678 176.287 709.901C56.3915 764.124 76.2466 436.809 14.0125 266.92C-48.2216 97.0318 111.441 192.71 231.337 138.487Z"
      fill={`url(#${gradientcolor}Gradient)`}
    />
  </svg>
);

export default function BgEclipse(
  props: Partial<CustomIconComponentProps> & {
    gradientcolor: "blue" | "orange";
  },
): ReactElement {
  return <Icon component={() => defaultIcon(props.gradientcolor)} {...props} />;
}
