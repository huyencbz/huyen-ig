import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Normal: Story = {
  args: {
    source: [
      "https://picsum.photos/id/10/900/900",
      "https://picsum.photos/id/11/900/900",
      "https://picsum.photos/id/12/900/900",
      "https://picsum.photos/id/13/900/900",
    ],
  },
};
