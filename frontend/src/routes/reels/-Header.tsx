import { FC } from "react";
import Camera from "../../assets/camera.svg?react";
import DownChevron from "../../assets/down_chevron.svg?react";

interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex absolute items-center gap-1 px-4 py-4 z-30 text-xl text-white w-full">
      <div className="font-bold">Reels</div>
      <div className="flex-grow">
        <DownChevron className="grow" />
      </div>
      <Camera />
    </div>
  );
};
