import { ReactNode } from "react";
export interface ButtonProps {
  children?: ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-500 text-white text-sm py-2 px-32 border-blue-700 rounded"
    >
      {children}
    </button>
  );
};
