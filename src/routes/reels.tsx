import { createFileRoute } from "@tanstack/react-router";
import { Toolbar } from "../components/Toolbar/Toolbar";
import Camera from "../assets/camera.svg?react";
import Like from "../assets/like.svg?react";
import Share from "../assets/share.svg?react";
import Comment from "../assets/comment.svg?react";
import DownChevron from "../assets/down_chevron.svg?react";
import Location from "../assets/location.svg?react";
import User from "../assets/user.svg?react";
import MusicNote from "../assets/music_note.svg?react";
import { Button } from "../components/Button/Button";
import { StoryAvatar } from "../components/StoryAvatar/StoryAvatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Chip } from "../components/Chip/Chip";
import { Layout } from "../components/Layout/Layout";

export const Route = createFileRoute("/reels")({
  component: Reels,
});
function Reels() {
  return (
    <Layout
      footer={
        <Toolbar
          atLikeScreen
          avatar="https://randomuser.me/api/portraits/men/88.jpg"
        />
      }
    >
      <div className="flex justify-center fixed top-0 left-0 right-0 bottom-[56px] ">
        <div className="flex absolute items-center gap-1 px-4 py-4 z-30 text-xl text-white w-full">
          <div className="font-bold">Reels</div>
          <div className="flex-grow">
            <DownChevron className="grow" />
          </div>
          <Camera />
        </div>
        <div className="flex absolute flex-col gap-6 bottom-8 right-4 z-30 text-sm text-white">
          <div className="flex flex-col items-center gap-2">
            <Like />
            372K
          </div>
          <div className="flex flex-col items-center gap-2">
            <Comment />
            1.278
          </div>
          <div className="flex flex-col items-center gap-2">
            <Share />
            4.427
          </div>
          <div className="text-center">...</div>
        </div>
        <div className="flex flex-col gap-2 absolute bottom-8 left-4 right-16 z-30 text-sm text-white">
          <div className="flex gap-2 items-center">
            <StoryAvatar
              size="x_small"
              src="https://randomuser.me/api/portraits/men/35.jpg"
            ></StoryAvatar>
            <span className="font-bold">katja.furr</span>
            <Button
              className="ml-2"
              color="transparent"
              size="small"
              border
              bold
            >
              Follow
            </Button>
          </div>
          <div>always sharing snacks & clothes ...</div>
          <div className="">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={8}
              freeMode={true}
              modules={[FreeMode]}
            >
              <SwiperSlide
                style={{ width: "fit-content" }}
                className="flex justify-center items-center"
              >
                <Chip icon={<MusicNote className="w-4 h-4" />}>
                  Tommy Richman
                </Chip>
              </SwiperSlide>
              <SwiperSlide
                style={{ width: "fit-content" }}
                className="flex justify-center items-center "
              >
                <Chip icon={<Location className="w-4 h-4" />}>hiep binh</Chip>
              </SwiperSlide>
              <SwiperSlide
                style={{ width: "fit-content" }}
                className="flex justify-center items-center "
              >
                <Chip icon={<User className="w-4 h-4" />}>huyen_cute</Chip>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/2795405/2795405-uhd_1440_2560_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Layout>
  );
}
