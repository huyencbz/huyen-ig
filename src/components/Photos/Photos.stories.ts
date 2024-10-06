import type { Meta, StoryObj } from "@storybook/react";

import { Photos } from "./Photos";

const meta: Meta<typeof Photos> = {
  component: Photos,
};

export default meta;
type Story = StoryObj<typeof Photos>;

export const Normal: Story = {
  args: {
    sources: [
      {
        source:
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
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
    ],
  },
};
