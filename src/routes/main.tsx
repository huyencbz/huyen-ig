import { createFileRoute } from "@tanstack/react-router";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import share from "../assets/share.svg";
import feed from "../assets/feed.svg";
import { StoryAvatar } from "../components/StoryAvatar/StoryAvatar";
import { Post } from "../components/Post/Post";
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
          <a href="/">
            <img src={camera} alt="camera" />
          </a>
          <img src={logo} alt="instagram" className="h-8 grow" />
          <div className="flex items-center gap-4 ">
            <a className="relative" href="/">
              <img src={feed} alt="feed" />
              <span className="absolute bg-red-500 rounded w-2 h-2 top-[3px] right-[-1px]" />
            </a>
            <a href="/">
              <img src={share} alt="share" />
            </a>
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
    </>
  ),
});
