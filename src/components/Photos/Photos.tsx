import { FC } from "react";
import { twMerge } from "tailwind-merge";
interface PhotosProps {
  sources: string[];
}
const isLarge = (index: number) =>
  (index + 1) % 10 === 3 || (index + 1) % 10 === 6;
export const Photos: FC<PhotosProps> = ({ sources }) => {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {sources.map((src, index) => {
        return (
          <div key={index} className={twMerge(isLarge(index) && "row-span-2")}>
            <img
              className={twMerge(
                "object-cover",
                isLarge(index) ? "h-full" : "aspect-square"
              )}
              src={src}
              alt="src"
            />
          </div>
        );
      })}
    </div>
  );
};
