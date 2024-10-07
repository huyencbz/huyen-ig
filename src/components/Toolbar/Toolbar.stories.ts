import type { Meta, StoryObj } from "@storybook/react";

import { Toolbar } from "./Toolbar";

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Normal: Story = {
  args: {
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    atUserScreen: true,
  },
};
