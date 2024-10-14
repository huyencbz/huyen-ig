import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export interface ButtonProps {
  children?: ReactNode;
  isBlock?: boolean;
  onClick?: () => void;
  type?: "submit" | "primary" | "secondary";
}
export const Button = ({ children, isBlock, onClick, type }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        type == "submit" &&
          "bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-2 border-blue-700 rounded",
        type == "primary" &&
          "bg-blue-400 font-medium px-2 text-white py-1 rounded-lg",
        type == "secondary" && "bg-gray-200 font-medium px-2 py-1 rounded-lg",
        isBlock && "w-full"
      )}
    >
      {children}
    </button>
  );
};
