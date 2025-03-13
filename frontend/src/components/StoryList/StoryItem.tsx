import { FC } from "react";
import { StoryAvatar } from "../StoryAvatar/StoryAvatar";
import { StoryUser } from "../Post/type";
import { Link } from "@tanstack/react-router";

export interface StoryItemProps {
  storyUser: StoryUser;
}
export const StoryItem: FC<StoryItemProps> = ({ storyUser }) => {
  return (
    <Link
      to="/"
      className="flex flex-col justify-center mx-1 text-black"
      aria-label={`This is ${storyUser.userInfo.name}'s story`}
      title={`This is ${storyUser.userInfo.name}'s story`}
    >
      <StoryAvatar
        isLive={storyUser.isLive}
        isAdd={storyUser.isAdd}
        isRead={storyUser.isRead}
        src={storyUser.userInfo.avatar}
      />
      <div className="text-xs text-center">{storyUser.userInfo.name}</div>
    </Link>
  );
};
