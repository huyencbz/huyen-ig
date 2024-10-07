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
    <div className="px-2 pt-14">
      <Swiper
        slidesPerView={4}
        spaceBetween={6}
        freeMode={true}
        modules={[FreeMode]}
      >
        {listUser.map((user, index) => (
          <SwiperSlide className="flex justify-center items-center" key={index}>
            <StoryItem storyUser={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
