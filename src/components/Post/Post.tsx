import { FC } from "react";
import { Header } from "./Header";
import { Action } from "./Actions";
import { Description } from "./Description";
import { Author } from "./type";
import { Divider } from "../Divider/Divider";
interface PostProps {
  author: Author;
}
export const Post: FC<PostProps> = ({ author }) => {
  return (
    <div className="flex flex-col gap-2">
      <Divider />
      <Header author={author} location="Tokyo, Japan" />
      <img src="https://picsum.photos/900" alt="content" />
      <Action />
      <Description
        likedBy={{
          avatar: "https://randomuser.me/api/portraits/women/81.jpg",
          name: "craig_love",
        }}
        likeCount="44,686"
        author={author}
        caption="The game in Japan was amazing and I want to share some photos"
      />
    </div>
  );
};
