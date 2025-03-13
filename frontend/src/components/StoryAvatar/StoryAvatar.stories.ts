import type { Meta, StoryObj } from "@storybook/react";
import { StoryAvatar } from "./StoryAvatar";

const meta: Meta<typeof StoryAvatar> = {
  component: StoryAvatar,
};

export default meta;
type Story = StoryObj<typeof StoryAvatar>;

export const Normal: Story = {
  args: {
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
export const Read: Story = {
  args: {
    isRead: true,
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
export const Add: Story = {
  args: {
    isAdd: true,
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
export const Live: Story = {
  args: {
    isLive: true,
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
