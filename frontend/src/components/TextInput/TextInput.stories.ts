import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Normal: Story = {
  args: {
    placeholder: "Username",
  },
};
export const Block: Story = {
  args: {
    placeholder: "Username",
    isBlock: true,
  },
};
export const Invalid: Story = {
  args: {
    placeholder: "Username",
    invalid: true,
  },
};
