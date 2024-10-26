import type { Meta, StoryObj } from "@storybook/react";
import PabloPVA from "../PabloPVA";

const meta: Meta<typeof PabloPVA> = {
  title: "PabloPVA", 
  component: PabloPVA, 
};
export default meta;

type Story = StoryObj<typeof PabloPVA>;

export const Primary: Story = {
  args: {
    title: "Primary Title",
    description: "This is the primary PabloPVA component.",
    avatar: "https://example.com/avatar-primary.jpg", 
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Title",
    description: "This is the secondary PabloPVA component.",
    avatar: "https://example.com/avatar-secondary.jpg", 
  },
};
