import { FC } from "react";

interface VideoProps {}
export const Video: FC<VideoProps> = () => {
  return (
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
  );
};
