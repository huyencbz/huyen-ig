import type { Meta, StoryObj } from "@storybook/react";

import { UserDiscover } from "./UserDiscover";

const meta: Meta<typeof UserDiscover> = {
  component: UserDiscover,
};

export default meta;
type Story = StoryObj<typeof UserDiscover>;

export const Normal: Story = {
  args: {},
};
