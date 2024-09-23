import { createFileRoute } from "@tanstack/react-router";
import Logo from "../assets/logo.svg?react";
import Camera from "../assets/camera.svg?react";
import Share from "../assets/share.svg?react";
import Feed from "../assets/feed.svg?react";
import Home from "../assets/home.svg?react";
import Search from "../assets/search.svg?react";
import AddPost from "../assets/add_post.svg?react";
import Like from "../assets/like.svg?react";
import { StoryAvatar } from "../components/StoryAvatar/StoryAvatar";
import { Post } from "../components/Post/Post";
import { Avatar } from "../components/Avatar/Avatar";
const author = {
  name: "joshua_l",
  isOfficial: true,
  avatar: "https://randomuser.me/api/portraits/men/88.jpg",
};
export const Route = createFileRoute("/main")({
  component: () => (
    <>
      <div className="flex justify-center fixed top-0 left-0 right-0 z-50 h-12">
        <div className="flex items-center px-4 grow max-w-[500px] bg-white border-b">
          <Camera />
          <Logo className="h-8 grow" />
          <div className="flex items-center gap-4 ">
            <div className="relative">
              <Feed />
              <span className="absolute bg-red-500 rounded w-2 h-2 top-[3px] right-[-1px]" />
            </div>
            <Share />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 px-2 pt-14">
          <div className="flex flex-col justify-center">
            <StoryAvatar
              isAdd
              src="https://randomuser.me/api/portraits/men/35.jpg"
            />
            <div className="text-xs text-center">Your story</div>
          </div>
          <div className="flex flex-col justify-center">
            <StoryAvatar
              isLive
              src="https://randomuser.me/api/portraits/women/33.jpg"
            />
            <div className="text-xs text-center">huyen_cute</div>
          </div>
          <div className="flex flex-col justify-center">
            <StoryAvatar
              isRead
              src="https://randomuser.me/api/portraits/men/54.jpg"
            />
            <div className="text-xs text-center">love_huyen</div>
          </div>
        </div>
        <Post author={author} />
        <Post author={author} />
      </div>
      <div className="flex justify-center fixed bottom-0 left-0 right-0 z-50 h-14">
        <div className="flex items-center justify-between grow max-w-[500px] bg-white px-6 py-4 border-t">
          <Home />
          <Search />
          <AddPost />
          <Like />
          <Avatar size="x_small" src={author.avatar} />
        </div>
      </div>
    </>
  ),
});
