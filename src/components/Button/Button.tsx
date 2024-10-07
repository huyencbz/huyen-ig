import { ReactNode } from "react";
export interface ButtonProps {
  children?: ReactNode;
  isBlock?: boolean;
  onClick?: () => void;
}
export const Button = ({ children, isBlock, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${isBlock ? "w-full" : ""} bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-2 border-blue-700 rounded`}
    >
      {children}
    </button>
  );
};
