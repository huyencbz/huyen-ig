import { FC } from "react";
interface PhotosProps {}
export const Photos: FC<PhotosProps> = () => {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
        />
      </div>
      <div className="row-span-2">
        <img
          className="h-full object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
        />
      </div>

      <div className="row-span-2 ">
        <img
          className=" h-full object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          alt=""
        />
      </div>
      <div className="">
        <img
          className="aspect-square object-cover"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
