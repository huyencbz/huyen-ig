import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Sample: Story = {
  args: {
    size: "medium",
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
export const Toolbar: Story = {
  args: {
    size: "x_small",
    atToolbar: true,
    src: "https://randomuser.me/api/portraits/men/35.jpg",
  },
};
