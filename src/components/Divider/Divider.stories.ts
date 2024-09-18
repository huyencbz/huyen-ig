import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Normal: Story = {
  args: {},
};
export const Label: Story = {
  args: {
    label: "OR",
  },
};
