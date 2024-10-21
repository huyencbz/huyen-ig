import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Normal: Story = {
  args: {
    children: "vagolanio",
    backgroundColor: "bg-blue-400",
  },
};
