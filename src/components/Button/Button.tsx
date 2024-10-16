import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export interface ButtonProps {
  children?: ReactNode;
  isBlock?: boolean;
  onClick?: () => void;
  color?: "primary" | "neutral" | "transparent";
  size?: "small" | "medium" | "large";
  border?: boolean;
  bold?: boolean;
  className?: string;
}
export const Button = ({
  children,
  isBlock,
  onClick,
  color = "neutral",
  size = "medium",
  border,
  bold,
  className,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        className,
        color == "primary" && "bg-blue-500 hover:bg-blue-700 text-white",
        color == "neutral" && "bg-gray-200 hover:bg-gray-300 ",
        color == "transparent" && "bg-transparent",
        size == "small" && "py-1 px-1 text-xs",
        size == "medium" && "py-1 px-2 text-sm",
        size == "large" && "py-1 px-3 text-base",
        isBlock && "w-full",
        border && "border border-gray-300",
        bold && "font-bold",
        "rounded-md"
      )}
    >
      {children}
    </button>
  );
};
