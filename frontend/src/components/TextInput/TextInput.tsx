import { ChangeEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps {
  isBlock?: boolean;
  invalid?: boolean;
  placeholder?: string;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const TextInput: FC<TextInputProps> = ({
  isBlock,
  invalid,
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <input
      className={twMerge(
        "border rounded py-2 px-3 text-gray-700 focus:outline-none",
        isBlock && "w-full",
        invalid && "border-red-500 "
      )}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};
