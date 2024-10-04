import type { Meta, StoryObj } from "@storybook/react";

import { Photos } from "./Photos";

const meta: Meta<typeof Photos> = {
  component: Photos,
};

export default meta;
type Story = StoryObj<typeof Photos>;

export const Normal: Story = {
  args: {},
};
