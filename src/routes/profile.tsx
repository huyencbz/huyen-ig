import { createFileRoute } from "@tanstack/react-router";
import { StoryAvatar } from "../components/StoryAvatar/StoryAvatar";
import AddUser from "../assets/add_user.svg?react";
import Grid from "../assets/grid.svg?react";
import Tags from "../assets/tags.svg?react";
import { UserDiscover } from "../components/UserDiscover/UserDiscover";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { Photos } from "../components/Photos/Photos";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

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

export const Route = createFileRoute("/profile")({
  component: Profile,
});
function Profile() {
  return (
    <div className="flex flex-col text-sm">
      <div className="flex items-center px-4 pt-4">
        <div className="grow">
          <StoryAvatar
            isAdd
            src={"https://randomuser.me/api/portraits/men/35.jpg"}
          />
        </div>
        <div className="flex gap-4 px-6">
          <div className="flex flex-col  items-center">
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
        <button className="bg-gray-200 font-medium px-6 py-1 rounded-lg grow">
          Edit profile
        </button>
        <button className="bg-gray-200 font-medium px-6 py-1 rounded-lg grow">
          Share profile
        </button>
        <button className="bg-gray-200 font-medium px-2 py-1 rounded-lg">
          <AddUser className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-6">
        <div className="flex justify-between px-4 pb-2">
          <div>Discover people</div>
          <a href=""> See all</a>
        </div>
        <div className="pl-4">
          <Swiper
            slidesPerView={2}
            spaceBetween={-70}
            freeMode={true}
            modules={[FreeMode]}
          >
            <SwiperSlide className="flex justify-center items-center">
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <UserDiscover />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center">
              <UserDiscover />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex mt-4 mb-[1px]">
        <span className="flex border-b border-black py-2 justify-center grow">
          <Grid />
        </span>
        <span className="flex justify-center border-b border-gray-400 py-2 opacity-40  grow">
          <Tags />
        </span>
        <span className="flex justify-center border-b border-gray-400 py-2 opacity-40 grow">
          <Tags />
        </span>
      </div>
      <Photos sources={sources}></Photos>
      <Toolbar
        avatar="https://randomuser.me/api/portraits/men/88.jpg"
        atUserScreen
      />
    </div>
  );
}
