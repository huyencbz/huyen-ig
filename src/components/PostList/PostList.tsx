import { FC } from "react";
import { Post, PostProps } from "../Post/Post";

interface PostListProps {
  items: PostProps[];
}
export const PostList: FC<PostListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Post {...item} key={index} />
      ))}
    </ul>
  );
};
