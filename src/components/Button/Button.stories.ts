import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  args: {
    children: "Log in",
  },
};

export const Block: Story = {
  args: {
    children: "Log in",
    isBlock: true,
  },
};
