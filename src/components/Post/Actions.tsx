import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import share from "../../assets/share.svg";
import save from "../../assets/save.svg";
import { FC } from "react";
interface ActionsProps {}
export const Action: FC<ActionsProps> = () => {
  return (
    <div className="flex space-x px-4">
      <div className="flex grow gap-4">
        <img src={like} alt="like" />
        <img src={comment} alt="comment" />
        <img src={share} alt="share" />
      </div>
      <img src={save} alt="save" />
    </div>
  );
};
