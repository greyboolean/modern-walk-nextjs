import { ButtonProps } from "./Button.types";

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="rounded-[10px] bg-magicInc-400 p-2 text-white hover:bg-magicInc-500 active:bg-magicInc-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
