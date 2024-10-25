import { FC } from "react";
import Like from "../../assets/like.svg?react";
import Comment from "../../assets/comment.svg?react";
import Share from "../../assets/share.svg?react";

interface MenuProps {}
export const Menu: FC<MenuProps> = () => {
  return (
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
  );
};
