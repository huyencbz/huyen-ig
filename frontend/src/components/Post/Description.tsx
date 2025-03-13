import { FC } from "react";
import { Author } from "./type";

interface DescriptionProps {
  likedBy?: Author;
  likeCount?: number;
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
      <div className="text-xs">
        {likedBy && (
          <>
            Liked by <span className="font-bold">{likedBy.name}</span>{" "}
          </>
        )}
        {likeCount && <span>and {likeCount.toLocaleString()} others</span>}
      </div>
      {caption && (
        <div className="text-xs ">
          <span className="font-bold">{author.name}</span>
          <span className="ml-2">{caption}</span>
        </div>
      )}
    </div>
  );
};
