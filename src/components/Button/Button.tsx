import { ReactNode } from "react";
export interface ButtonProps {
  children?: ReactNode;
  isBlock?: boolean;
}
export const Button = ({ children, isBlock }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${isBlock ? "w-full" : ""} bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-2 border-blue-700 rounded`}
    >
      {children}
    </button>
  );
};
