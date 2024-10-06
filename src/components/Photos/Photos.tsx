import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Gallery from "../../assets/gallery.svg?react";
interface Source {
  source: string;
  isGallery: boolean;
}
interface PhotosProps {
  sources: Source[];
}
const isLarge = (index: number) =>
  (index + 1) % 10 === 3 || (index + 1) % 10 === 6;
export const Photos: FC<PhotosProps> = ({ sources }) => {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {sources.map((src, index) => {
        return (
          <div
            key={index}
            className={twMerge("relative", isLarge(index) && "row-span-2")}
          >
            <img
              className={twMerge(
                "object-cover",
                isLarge(index) ? "h-full" : "aspect-square"
              )}
              src={src.source}
              alt="src"
            />
            {src.isGallery && <Gallery className="absolute top-4 right-4" />}
          </div>
        );
      })}
    </div>
  );
};
