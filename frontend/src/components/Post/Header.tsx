import { Avatar } from "../Avatar/Avatar";
import Official from "../../assets/official.svg?react";
import { FC } from "react";
import { Author } from "./type";
import { Button } from "../Button/Button";
import { Link } from "@tanstack/react-router";
interface HeaderProps {
  author: Author;
  location?: string;
}
export const Header: FC<HeaderProps> = ({ author, location }) => {
  return (
    <div className="flex space-x px-4 mt-2">
      <div className="grow">
        <div className="flex gap-2 items-center">
          <Link to="/" aria-label={author.name} title={author.name}>
            <Avatar size="small" src={author.avatar} />
          </Link>
          <div>
            <div className="flex gap-1 items-center">
              <div className="text-xs font-bold">{author.name}</div>
              {author.isOfficial && (
                <>
                  <div className="sr-only">official</div>
                  <Official title="official" aria-hidden />
                </>
              )}
            </div>
            {location && <div className="text-xs">{location}</div>}
          </div>
        </div>
      </div>
      <Button color="transparent">...</Button>
    </div>
  );
};
