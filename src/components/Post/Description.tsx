import { Avatar } from "../Avatar/Avatar";
import { FC } from "react";
import { Author } from "./type";

interface DescriptionProps {
  likedBy: {
    avatar: string;
    name: string;
  };
  likeCount?: string;
  author: Author;
  caption?: string;
}
export const Description: FC<DescriptionProps> = ({
  likedBy,
  likeCount,
  author,
  caption,
}) => {
  return (
    <div className="flex flex-col gap-1 px-4">
      <div className="flex gap-2 items-center">
        <Avatar src={likedBy.avatar} size="small" />
        <div className="text-xs">
          Liked by <span className="font-bold">{likedBy.name}</span>{" "}
          {likeCount && <span>and {likeCount} others</span>}
        </div>
      </div>
      {caption && (
        <div className="text-xs">
          <span className="font-bold">{author.name}</span>
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
};
