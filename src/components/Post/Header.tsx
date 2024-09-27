import { Avatar } from "../Avatar/Avatar";
import Official from "../../assets/official.svg?react";
import { FC } from "react";
import { Author } from "./type";
interface HeaderProps {
  author: Author;
  location?: string;
}
export const Header: FC<HeaderProps> = ({ author, location }) => {
  return (
    <div className="flex space-x px-4 mt-2">
      <div className="grow">
        <div className="flex gap-2 items-center">
          <Avatar size="small" src={author.avatar} />
          <div>
            <div className="flex gap-1 items-center">
              <div className="text-xs font-bold">joshua_l</div>
              {author.isOfficial && <Official />}
            </div>
            {location && <div className="text-xs">{location}</div>}
          </div>
        </div>
      </div>
      <div>...</div>
    </div>
  );
};
