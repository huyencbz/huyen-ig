import { FC } from "react";
import { StoryAvatar } from "../StoryAvatar/StoryAvatar";

interface ProfileAvatarProps {}
export const ProfileAvatar: FC<ProfileAvatarProps> = ({}) => {
  return (
    <div className="relative">
      <StoryAvatar
        isAdd
        src={"https://randomuser.me/api/portraits/men/35.jpg"}
      />
      <div className="absolute flex items-center -top-8 left-0">
        <span className="bg-white shadow-[rgba(0,0,15,0.1)_0px_0px_8px_0px] text-gray-500 text-center text-xs py-[6px] rounded-[16px] break-words w-[64px]">
          Drop a thought
        </span>
        <span className="absolute bg-white rounded-full w-4 h-4 -bottom-[6px] left-4 shadow-md"></span>
        <span className="absolute bg-white rounded-full w-[5px] h-[5px] -bottom-[12px] left-[26px] shadow-md"></span>
      </div>
    </div>
  );
};
