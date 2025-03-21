import { createFileRoute } from "@tanstack/react-router";
import { Layout, PostList, StoryList, Header, Toolbar } from "@ig/components";
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

const postList = [
  {
    author: author,
    location: "Tokyo, Japan",
    content: {
      caption: "The game in Japan was amazing and I want to share some photos",
      source: ["https://picsum.photos/900"],
    },
    like: {
      by: author,
      count: 44686,
    },
  },
  {
    author: author,
    location: "Tokyo, Japan",
    content: {
      caption:
        "The game in Japan was amazing and I want to share some photos. The game in Japan was amazing and I want to share some photos",
      source: [
        "https://picsum.photos/id/10/900/900",
        "https://picsum.photos/id/11/900/900",
        "https://picsum.photos/id/12/900/900",
        "https://picsum.photos/id/13/900/900",
      ],
    },
    like: {
      by: author,
      count: 44686,
    },
  },
];

export const Route = createFileRoute("/main")({
  component: Main,
});

function Main() {
  return (
    <Layout
      header={<Header />}
      footer={<Toolbar avatar={author.avatar} atHomeScreen />}
    >
      <div className="flex flex-col gap-2">
        <StoryList listUser={listUser} />
        <PostList items={postList} />
      </div>
    </Layout>
  );
}
