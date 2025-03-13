import Logo from "../../assets/logo.svg?react";
import Camera from "../../assets/camera.svg?react";
import Share from "../../assets/share.svg?react";
import Feed from "../../assets/feed.svg?react";

export const Header = () => {
  return (
    <div className="flex justify-center fixed top-0 left-0 right-0 z-50 h-12">
      <div className="flex items-center px-4 grow sm:max-w-[480px] bg-[#fafafa] border-b">
        <Camera />
        <Logo className="h-8 grow" />
        <div className="flex items-center gap-4 ">
          <div className="relative">
            <Feed />
            <span className="absolute bg-red-500 rounded w-2 h-2 top-[3px] right-[-1px]" />
          </div>
          <Share />
        </div>
      </div>
    </div>
  );
};
