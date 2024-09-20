import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarProps {
  size?: "small" | "medium" | "large";
  isOutline?: boolean;
  className?: string;
  src: string;
}

const sizeMap = {
  small: "w-10 h-10",
  medium: "w-16 h-16",
  large: "w-20 h-20",
};
export const Avatar: FC<AvatarProps> = ({ size, className, src }) => {
  return (
    <img
      className={twMerge("rounded-full", sizeMap[size!], className)}
      src={src}
      alt="Rounded avatar"
    ></img>
  );
};
