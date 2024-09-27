import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../components/Post/Post";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { Header } from "../components/Header/Header";
import { StoryList } from "../components/StoryList/StoryList";
const author = {
  name: "joshua_l",
  isOfficial: true,
  avatar: "https://randomuser.me/api/portraits/men/88.jpg",
};
const listUser = [
  {
    userInfo: {
      name: "Your story",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    isAdd: true,
  },
  {
    userInfo: {
      name: "huyen_cute",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    isLive: true,
  },
  {
    userInfo: {
      name: "love_huyen",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    isRead: true,
  },
  {
    userInfo: {
      name: "love_huyen",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    isRead: true,
  },
  {
    userInfo: {
      name: "love_huyen",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    isRead: true,
  },
];

export const Route = createFileRoute("/main")({
  component: () => (
    <>
      <Header />
      <div className="flex flex-col gap-2 mb-16">
        <StoryList listUser={listUser} />
        <Post author={author} />
        <Post author={author} />
      </div>
      <Toolbar avatar={author.avatar} />
    </>
  ),
});
