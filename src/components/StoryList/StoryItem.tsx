import { FC } from "react";
import { StoryAvatar } from "../StoryAvatar/StoryAvatar";
import { StoryUser } from "../Post/type";

export interface StoryItemProps {
  storyUser: StoryUser;
}
export const StoryItem: FC<StoryItemProps> = ({ storyUser }) => {
  return (
    <div className="flex flex-col justify-center mx-1">
      <StoryAvatar
        isLive={storyUser.isLive}
        isAdd={storyUser.isAdd}
        isRead={storyUser.isRead}
        src={storyUser.userInfo.avatar}
      />
      <div className="text-xs text-center">{storyUser.userInfo.name}</div>
    </div>
  );
};
