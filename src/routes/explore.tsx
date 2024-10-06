import { createFileRoute } from "@tanstack/react-router";
import { Search } from "../components/Search/Search";
import { Photos } from "../components/Photos/Photos";
import { Toolbar } from "../components/Toolbar/Toolbar";

const sources = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

export const Route = createFileRoute("/explore")({
  component: Explore,
});
function Explore() {
  return (
    <>
      <div className="mx-3 my-2">
        <Search />
      </div>
      <Photos sources={sources} />
      <Toolbar avatar="https://randomuser.me/api/portraits/men/88.jpg" />
    </>
  );
}
