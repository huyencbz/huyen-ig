import Like from "../../assets/like.svg?react";
import Comment from "../../assets/comment.svg?react";
import Share from "../../assets/share.svg?react";
import Save from "../../assets/save.svg?react";
import { FC } from "react";
import { Button } from "../Button/Button";
interface ActionsProps {}
export const Action: FC<ActionsProps> = () => {
  return (
    <div className="flex space-x px-4">
      <div className="flex grow gap-4">
        <Button color="transparent" aria-label="Like">
          <Like />
        </Button>
        <Button color="transparent" aria-label="Comment">
          <Comment />
        </Button>
        <Button color="transparent" aria-label="Share">
          <Share />
        </Button>
      </div>
      <Button color="transparent" aria-label="Save">
        <Save />
      </Button>
    </div>
  );
};
