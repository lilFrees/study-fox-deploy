import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const defaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="460"
    height="716"
    viewBox="0 0 460 716"
    fill="none"
  >
    <path
      d="M231.337 138.487C351.232 84.2639 385.958 -99.3266 448.192 70.5618C510.426 240.45 296.182 655.678 176.287 709.901C56.3915 764.124 76.2466 436.809 14.0125 266.92C-48.2216 97.0318 111.441 192.71 231.337 138.487Z"
      fill="url(#paint0_linear_26_161)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_26_161"
        x1="123"
        y1="734"
        x2="-49.3749"
        y2="118.577"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF996D" />
        <stop offset="1" stopColor="#FF3718" />
      </linearGradient>
    </defs>
  </svg>
);

export default function BgEclipse(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={defaultIcon} {...props} />;
}
