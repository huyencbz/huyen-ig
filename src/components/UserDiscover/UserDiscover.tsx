import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import Close from "../../assets/close.svg?react";
import { Button } from "../Button/Button";

interface UserDiscoverProps {}
export const UserDiscover: FC<UserDiscoverProps> = () => {
  return (
    <div className="flex flex-col gap-[10px] py-[10px] px-[10px] w-fit items-center text-xs border border-t rounded relative mx-1">
      <button className="absolute top-1 right-1">
        <Close className="w-4 h-4" />
      </button>
      <Avatar
        size="medium"
        src="https://randomuser.me/api/portraits/men/35.jpg"
      />
      <div className="flex flex-col items-center">
        <span className="font-medium">Hoang Khoa</span>
        <span className="break-words w-24 text-center text-[10px] text-gray-400">
          Followed by anniee_ei + 1 more
        </span>
      </div>
      <Button color="primary" isBlock>
        Follow
      </Button>
    </div>
  );
};
