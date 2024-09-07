import "../../index.css";
import { FC, ReactNode } from "react";

interface AvatarProps {
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: "w-10 h-10",
  medium: "w-16 h-16",
  large: "w-20 h-20",
};
export const Avatar: FC<AvatarProps> = ({ size }) => {
  return (
    <img
      className={`${sizeMap[size]} rounded-full`}
      src="https://randomuser.me/api/portraits/men/35.jpg"
      alt="Rounded avatar"
    ></img>
  );
};
