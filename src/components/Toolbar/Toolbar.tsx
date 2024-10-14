import Home from "../../assets/home.svg?react";
import Search from "../../assets/search.svg?react";
import AddPost from "../../assets/add_post.svg?react";
import Like from "../../assets/like.svg?react";
import LikeActive from "../../assets/like_active.svg?react";
import HomeActive from "../../assets/home_active.svg?react";
import SearchActive from "../../assets/search_active.svg?react";
import { FC } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Link } from "@tanstack/react-router";

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
      <div className="flex items-center justify-between grow max-w-[340px] bg-[#fafafa] px-6 py-4 border-t">
        {atHomeScreen ? (
          <HomeActive />
        ) : (
          <Link to="/main">
            <Home className="text-black" />
          </Link>
        )}

        {atSearchScreen ? (
          <SearchActive />
        ) : (
          <Link to="/explore">
            <Search className="text-black" />
          </Link>
        )}

        <AddPost />
        {atLikeScreen ? (
          <LikeActive />
        ) : (
          <Link to="/reels">
            <Like className="text-black" />
          </Link>
        )}
        {atUserScreen ? (
          <Avatar size="x_small" src={avatar} atToolbar />
        ) : (
          <Link to="/profile">
            <Avatar size="x_small" src={avatar} />
          </Link>
        )}
      </div>
    </div>
  );
};
