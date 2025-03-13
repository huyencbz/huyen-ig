import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ChipProps {
  children: ReactNode;
  icon?: ReactNode;
  backgroundColor?: string;
}
export const Chip: FC<ChipProps> = ({
  children,
  backgroundColor = "bg-gray-600",
  icon,
}) => {
  return (
    <div
      className={twMerge(
        "flex gap-1 items-center rounded-full w-fit px-2 py-1 bg-opacity-50",
        backgroundColor
      )}
    >
      {icon}
      {children}
    </div>
  );
};
