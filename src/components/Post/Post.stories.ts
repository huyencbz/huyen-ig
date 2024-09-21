import type { Meta, StoryObj } from "@storybook/react";
import { Post } from "./Post";

const meta: Meta<typeof Post> = {
  component: Post,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Sample: Story = {
  args: {
    author: {
      name: "joshua_l",
      isOfficial: true,
      avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    },
  },
};
