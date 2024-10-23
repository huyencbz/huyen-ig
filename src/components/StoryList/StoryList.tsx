import { FC } from "react";
import { StoryItem } from "./StoryItem";
import { StoryUser } from "../Post/type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

interface StoryListProps {
  listUser: StoryUser[];
}
export const StoryList: FC<StoryListProps> = ({ listUser }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      freeMode={true}
      modules={[FreeMode]}
      className="w-screen"
    >
      {listUser.map((user, index) => (
        <SwiperSlide
          className="flex justify-center"
          style={{ width: "fit-content" }}
          key={index}
        >
          <StoryItem storyUser={user} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
