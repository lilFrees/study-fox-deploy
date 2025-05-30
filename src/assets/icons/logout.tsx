import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import { ReactElement } from "react";

const icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 31 31"
    fill="none"
  >
    <path
      d="M11.4961 9.765C11.8965 5.115 14.2861 3.21625 19.5173 3.21625H19.6853C25.459 3.21625 27.7711 5.52833 27.7711 11.3021V19.7237C27.7711 25.4975 25.459 27.8096 19.6853 27.8096H19.5173C14.3248 27.8096 11.9353 25.9367 11.509 21.3642"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.58301 15.5H19.2197"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3398 11.1729L20.6669 15.5L16.3398 19.8271"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LogoutIcon(
  props: Partial<CustomIconComponentProps>,
): ReactElement {
  return <Icon component={icon} {...props} />;
}
