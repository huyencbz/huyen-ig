import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderProps {
  source: string[];
}

export const Slider: FC<SliderProps> = ({ source }) => {
  return (
    <Swiper
      className="w-screen"
      pagination={{
        dynamicBullets: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
    >
      {source.map((item, index) => (
        <SwiperSlide className="flex justify-center items-center" key={index}>
          <img
            className="block w-full h-full object-cover"
            src={item}
            alt="content"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
