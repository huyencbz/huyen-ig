import { FC } from "react";
import { Header } from "./Header";
import { Action } from "./Actions";
import { Description } from "./Description";
import { Author } from "./type";
import { Divider } from "../Divider/Divider";
export interface PostProps {
  author: Author;
  location?: string;
  content: {
    caption?: string;
    source: string;
  };
  like?: {
    by: Author;
    count?: number;
  };
}
export const Post: FC<PostProps> = ({ author, location, content, like }) => {
  return (
    <div className="flex flex-col gap-2">
      <Divider />
      <Header author={author} location={location} />
      <img src={content.source} alt="content" />
      <Action />
      <Description
        likedBy={like!.by}
        likeCount={like!.count}
        author={author}
        caption={content.caption}
      />
    </div>
  );
};
