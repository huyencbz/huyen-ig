import { createFileRoute } from "@tanstack/react-router";
import { Layout, Toolbar, Photos, Search } from "@ig/components";
import { withAuth } from "../shared/withAuth";

export const sources = [
  {
    source: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    isGallery: false,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    isGallery: true,
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
    isGallery: true,
  },
  {
    source:
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    isGallery: true,
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

function ExploreComponent() {
  return (
    <Layout
      footer={
        <Toolbar
          avatar="https://randomuser.me/api/portraits/men/88.jpg"
          atSearchScreen
        />
      }
    >
      <div className="mx-3 my-2">
        <Search />
      </div>
      <Photos order sources={sources} />
    </Layout>
  );
}

const Explore = withAuth(ExploreComponent);

export const Route = createFileRoute("/explore")({
  component: Explore,
});
