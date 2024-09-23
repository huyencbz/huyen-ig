import Like from "../../assets/like.svg?react";
import Comment from "../../assets/comment.svg?react";
import Share from "../../assets/share.svg?react";
import Save from "../../assets/save.svg?react";
import { FC } from "react";
interface ActionsProps {}
export const Action: FC<ActionsProps> = () => {
  return (
    <div className="flex space-x px-4">
      <div className="flex grow gap-4">
        <Like />
        <Comment />
        <Share />
      </div>
      <Save />
    </div>
  );
};
