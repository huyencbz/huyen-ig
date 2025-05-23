import { createFileRoute } from "@tanstack/react-router";
import AddUser from "../assets/add_user.svg?react";
import VideoPlay from "../assets/video_play.svg?react";
import Grid from "../assets/grid.svg?react";
import Tags from "../assets/tags.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import {
  Layout,
  ProfileAvatar,
  Button,
  Tabs,
  Photos,
  Toolbar,
  UserDiscover,
} from "@ig/components";
import { withAuth } from "@ig/shared";

const sources = [
  {
    source: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    isGallery: false,
  },
];

function ProfileComponent() {
  return (
    <Layout
      footer={
        <Toolbar
          avatar="https://randomuser.me/api/portraits/men/88.jpg"
          atUserScreen
        />
      }
    >
      <div className="flex flex-col text-sm">
        <div className="flex items-center px-4 pt-10">
          <div className="grow">
            <ProfileAvatar />
          </div>
          <div className="flex gap-4 px-6">
            <div className="flex flex-col items-center">
              <div className="text-base">10</div>
              <div>posts</div>
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-base">10</div>
              <div>followers</div>
            </div>
            <div className="flex flex-col  items-center">
              <div className="text-base">10</div>
              <div>following</div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 px-4 mt-6">
          <Button isBlock>Edit profile</Button>
          <Button isBlock>Share profile</Button>
          <Button>
            <AddUser className="w-4 h-4" />
          </Button>
        </div>
        <div className="mt-6">
          <div className="flex justify-between px-4 pb-2">
            <div>Discover people</div>
            <a href=""> See all</a>
          </div>
          <Swiper
            className="w-screen sm:max-w-[480px]"
            slidesPerView={"auto"}
            freeMode={true}
            modules={[FreeMode]}
          >
            <SwiperSlide
              className="flex justify-center items-center"
              style={{ width: "fit-content" }}
            >
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide
              className="flex justify-center items-center"
              style={{ width: "fit-content" }}
            >
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide
              className="flex justify-center items-center"
              style={{ width: "fit-content" }}
            >
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide
              className="flex justify-center items-center"
              style={{ width: "fit-content" }}
            >
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide
              className="flex justify-center items-center"
              style={{ width: "fit-content" }}
            >
              <UserDiscover />
            </SwiperSlide>
          </Swiper>
        </div>
        <Tabs activeTab={0} tabs={[<Grid />, <VideoPlay />, <Tags />]} />
        <Photos order sources={sources}></Photos>
      </div>
    </Layout>
  );
}

const Profile = withAuth(ProfileComponent);

export const Route = createFileRoute("/profile")({
  component: Profile,
});
