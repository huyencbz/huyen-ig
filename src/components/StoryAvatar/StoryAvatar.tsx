import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Avatar, AvatarProps } from "../Avatar/Avatar";
import Plus from "../../assets/plus.svg?react";

interface StoryAvatarProps extends AvatarProps {
  isRead?: boolean;
  isAdd?: boolean;
  isLive?: boolean;
}

export const StoryAvatar: FC<StoryAvatarProps> = ({
  isRead,
  isLive,
  isAdd,
  ...props
}) => {
  const styles = {
    read: "bg-gray-400",
    unread: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    add: "bg-white",
  };
  return (
    <span className="relative inline-block">
      <span
        className={twMerge(
          "rounded-full px-1 py-1 inline-block",
          isRead && !isAdd && styles.read,
          !isRead && !isAdd && styles.unread,
          isAdd && styles.add
        )}
      >
        <Avatar
          size="medium"
          isOutline
          className={twMerge(
            "outline outline-white",
            isRead ? "outline-3" : "outline-2"
          )}
          {...props}
        />
      </span>
      {isAdd && (
        <span className="flex items-center justify-center absolute bg-blue-500 rounded-full bottom-[10px] right-[5px] w-4 h-4 leading-none outline outline-white text-white font-bold">
          <Plus />
        </span>
      )}
      {isLive && (
        <span className="absolute bottom-[2px] left-[24px] bg-pink-600 rounded outline outline-2 border-white text-[8px] text-white px-1 py-[1px]">
          LIVE
        </span>
      )}
    </span>
  );
};
