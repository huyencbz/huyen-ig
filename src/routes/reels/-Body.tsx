import { FC } from "react";
import MusicNote from "../../assets/music_note.svg?react";
import Location from "../../assets/location.svg?react";
import User from "../../assets/user.svg?react";
import { StoryAvatar } from "../../components/StoryAvatar/StoryAvatar";
import { Button } from "../../components/Button/Button";
import { Chip } from "../../components/Chip/Chip";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

interface BodyProps {}
export const Body: FC<BodyProps> = () => {
  return (
    <div className="flex flex-col gap-2 absolute bottom-8 left-4 right-16 z-30 text-sm text-white">
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
            <Chip icon={<MusicNote className="w-4 h-4" />}>Tommy Richman</Chip>
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
  );
};
