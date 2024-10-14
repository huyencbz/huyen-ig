import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Submit: Story = {
  args: {
    children: "Log in",
    type: "submit",
  },
};

export const Block: Story = {
  args: {
    children: "Log in",
    isBlock: true,
    type: "submit",
  },
};

export const Primary: Story = {
  args: {
    children: "Follow",
    isBlock: true,
    type: "primary",
  },
};
export const Secondary: Story = {
  args: {
    children: "Follow",
    type: "secondary",
  },
};
