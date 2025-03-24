import { createFileRoute } from "@tanstack/react-router";
import Close from "../assets/close.svg?react";
import Camera from "../assets/camera.svg?react";
import Gallery from "../assets/gallery.svg?react";
import DownChevron from "../assets/down_chevron.svg?react";
import UpChevron from "../assets/up_chevron.svg?react";
import Picture from "../assets/picture.svg?react";
import { Photos } from "@ig/components";
import { withAuth } from "../shared/withAuth";

export const sources = [
  {
    source: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    isGallery: false,
  },
];

function PostComponent() {
  return (
    <div className="h-screen">
      <div className="flex justify-center fixed top-0 left-0 right-0 z-50 h-12">
        <div className="flex text-white justify-between items-center px-4 grow sm:max-w-[480px] font-medium bg-black border-b">
          <Close className="w-8 h-8" />
          <div>New post</div>
          <a>Next</a>
        </div>
      </div>
      <div className="relative">
        <img src="https://picsum.photos/900"></img>
        <div className="flex justify-center absolute top-14 left-4 h-8 ">
          <div className="flex gap-1 text-white justify-between items-center px-2 bg-gray-500 rounded-full">
            <Picture className="w-4 h-4" />
            <div>Photos</div>
            <DownChevron className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex justify-center absolute bottom-4 left-4 h-8">
          <div className="flex flex-col text-white  items-center px-2 bg-gray-500 rounded-full rotate-45">
            <UpChevron className="w-4 h-4" />
            <DownChevron className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-center h-12">
        <div className="flex text-white items-center gap-4 px-4 grow sm:max-w-[480px] font-medium bg-black border-b">
          <div className="flex items-center gap-1 grow">
            <div>Recents</div>
            <DownChevron className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-center bg-gray-600 bg-opacity-50 border border-gray-500 rounded-full w-6 h-6 px-[5px] py-[5px]">
            <Gallery />
          </div>
          <div className="flex items-center justify-center bg-gray-600 bg-opacity-50 border border-gray-500 rounded-full w-6 h-6 px-[5px] py-[5px]">
            <Camera />
          </div>
        </div>
      </div>
      <Photos sources={sources} />
      <div className="flex justify-center fixed bottom-10 right-2 z-50 h-12 sm:right-[488px]">
        <div className="flex gap-2 text-white justify-between items-center px-6 bg-gray-500 rounded-full">
          <div>POST</div>
          <div className="text-gray-400">STORY</div>
          <div className="text-gray-400">REEL</div>
          <div className="text-gray-400">LIVE</div>
        </div>
      </div>
    </div>
  );
}

const Post = withAuth(PostComponent);

export const Route = createFileRoute("/post")({
  component: Post,
});
