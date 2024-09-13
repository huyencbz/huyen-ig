import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends HTMLInputElement {
  isBlock?: boolean;
  invalid?: boolean;
}
export const TextInput: FC<TextInputProps> = ({
  isBlock,
  invalid,
  ...props
}) => {
  return (
    <input
      className={twMerge(
        "border rounded py-2 px-3 text-gray-700 focus:outline-none",
        isBlock && "w-full",
        invalid && "border-red-500 ",
      )}
      {...props}
    />
  );
};
