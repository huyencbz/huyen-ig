import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
  args: {
    tabs: ["Tab 1", "Tab 2", "Tab 3"],
    activeTab: 0,
  },
};
