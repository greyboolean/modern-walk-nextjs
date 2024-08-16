import { ButtonIconProps } from "./ButtonIcon.types";

function ButtonIcon({ Icon }: ButtonIconProps) {
  return <Icon style={{ margin: "0.25rem" }} />;
}

export default ButtonIcon;
