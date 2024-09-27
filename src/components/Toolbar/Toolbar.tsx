import Home from "../../assets/home.svg?react";
import Search from "../../assets/search.svg?react";
import AddPost from "../../assets/add_post.svg?react";
import Like from "../../assets/like.svg?react";
import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";

interface ToolbarProps {
  avatar: string;
}
export const Toolbar: FC<ToolbarProps> = ({ avatar }) => {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 right-0 z-50 h-14">
      <div className="flex items-center justify-between grow max-w-[500px] bg-white px-6 py-4 border-t">
        <Home />
        <Search />
        <AddPost />
        <Like />
        <Avatar size="x_small" src={avatar} />
      </div>
    </div>
  );
};
