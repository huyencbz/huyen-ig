import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Log in",
    color: "primary",
    size: "small",
  },
};

export const Block: Story = {
  args: {
    children: "Log in",
    isBlock: true,
    color: "primary",
    size: "large",
  },
};

export const Neutral: Story = {
  args: {
    children: "Follow",
    color: "neutral",
    size: "medium",
  },
};
export const Transparent: Story = {
  args: {
    children: "Follow",
    color: "transparent",
    size: "small",
  },
};
export const Small: Story = {
  args: {
    children: "Log in",
    color: "primary",
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    children: "Log in",
    color: "primary",
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    children: "Log in",
    color: "primary",
    size: "large",
  },
};
