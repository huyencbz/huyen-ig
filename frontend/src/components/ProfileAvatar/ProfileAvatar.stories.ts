import type { Meta, StoryObj } from "@storybook/react";

import { ProfileAvatar } from "./ProfileAvatar";

const meta: Meta<typeof ProfileAvatar> = {
  component: ProfileAvatar,
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Normal: Story = {
  args: {},
};
