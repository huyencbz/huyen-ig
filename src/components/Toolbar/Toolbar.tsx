import Home from "../../assets/home.svg?react";
import Search from "../../assets/search.svg?react";
import AddPost from "../../assets/add_post.svg?react";
import Like from "../../assets/like.svg?react";
import LikeActive from "../../assets/like_active.svg?react";
import HomeActive from "../../assets/home_active.svg?react";
import SearchActive from "../../assets/search_active.svg?react";
import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";

interface ToolbarProps {
  avatar: string;
  atHomeScreen?: boolean;
  atSearchScreen?: boolean;
  atLikeScreen?: boolean;
  atUserScreen?: boolean;
}
export const Toolbar: FC<ToolbarProps> = ({
  avatar,
  atHomeScreen,
  atLikeScreen,
  atSearchScreen,
  atUserScreen,
}) => {
  return (
    <div className="flex justify-center fixed bottom-0 left-0 right-0 z-50 h-14">
      <div className="flex items-center justify-between grow max-w-[500px] bg-[#fafafa] px-6 py-4 border-t">
        {atHomeScreen ? <HomeActive /> : <Home />}
        {atSearchScreen ? <SearchActive /> : <Search />}
        <AddPost />
        {atLikeScreen ? <LikeActive /> : <Like />}
        <Avatar size="x_small" atToolbar={atUserScreen} src={avatar} />
      </div>
    </div>
  );
};
