import { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarProps {
  size?: "x_small" | "small" | "medium" | "large";
  isOutline?: boolean;
  className?: string;
  src: string;
  atToolbar?: boolean;
}

const sizeMap = {
  x_small: "w-6 h-6",
  small: "w-10 h-10",
  medium: "w-16 h-16",
  large: "w-20 h-20",
};
export const Avatar: FC<AvatarProps> = ({
  size,
  className,
  src,
  atToolbar,
}) => {
  if (atToolbar) {
    return (
      <span className="rounded-full px-[2px] py-[2px] inline-block bg-gray-500">
        <img
          className={twMerge(
            "rounded-full outline outline-white outline-1 ",
            sizeMap[size!],
            className
          )}
          src={src}
          alt="Logged in user avatar"
        ></img>
      </span>
    );
  }
  return (
    <img
      className={twMerge("rounded-full", sizeMap[size!], className)}
      src={src}
      alt=""
    ></img>
  );
};
