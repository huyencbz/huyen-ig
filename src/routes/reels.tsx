import { createFileRoute } from "@tanstack/react-router";
import { Toolbar } from "../components/Toolbar/Toolbar";
import Camera from "../assets/camera.svg?react";
import Like from "../assets/like.svg?react";
import Share from "../assets/share.svg?react";
import Comment from "../assets/comment.svg?react";
import DownChevron from "../assets/down_chevron.svg?react";
import { Button } from "../components/Button/Button";
import { StoryAvatar } from "../components/StoryAvatar/StoryAvatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

export const Route = createFileRoute("/reels")({
  component: Reels,
});
function Reels() {
  return (
    <div className="relative flex justify-center h-screen mb-12">
      <div className="flex absolute items-center gap-1 px-4 py-4 z-30 text-xl text-white w-full">
        <div className="font-bold">Reels</div>
        <div className="flex-grow">
          <DownChevron className="grow" />
        </div>
        <Camera />
      </div>
      <div className="flex absolute flex-col gap-6 bottom-20 right-4 z-30 text-sm text-white">
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
      <div className="flex flex-col gap-2 absolute bottom-20 left-4 right-16 z-30 text-sm text-white">
        <div className="flex gap-2 items-center">
          <StoryAvatar
            size="x_small"
            src="https://randomuser.me/api/portraits/men/35.jpg"
          ></StoryAvatar>
          <span className="font-bold">katja.furr</span>
          <Button className="ml-2" color="transparent" size="small" border bold>
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
              <div className="bg-blue-400 rounded-full">music</div>
            </SwiperSlide>
            <SwiperSlide
              style={{ width: "fit-content" }}
              className="flex justify-center items-center "
            >
              <div className="bg-red-400 rounded-full">location</div>
            </SwiperSlide>
            <SwiperSlide
              style={{ width: "fit-content" }}
              className="flex justify-center items-center "
            >
              <div className="bg-pink-400 rounded-full">user</div>
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
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
      </video>
      <Toolbar
        atLikeScreen
        avatar="https://randomuser.me/api/portraits/men/88.jpg"
      />
    </div>
  );
}
