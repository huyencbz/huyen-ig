import { FC } from "react";
import { StoryItem } from "./StoryItem";
import { StoryUser } from "../Post/type";

interface StoryListProps {
  listUser: StoryUser[];
}
export const StoryList: FC<StoryListProps> = ({ listUser }) => {
  return (
    <div className="flex gap-4 px-2 pt-14">
      {listUser.map((user, index) => (
        <StoryItem storyUser={user} key={index} />
      ))}
    </div>
  );
};
