import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HomeIcon } from "lucide-react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/ui/button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "link",
        "ghost",
        null,
        undefined,
      ],
      description: "The button variant. Default value is `default`",
      defaultValue: ["default"],
    },
    size: {
      control: "select",
      options: ["default", "icon", "lg", "sm", null, undefined],
      description: "The button size. Default value is `default`",
      defaultValue: "default",
    },
    asChild: {
      control: "boolean",
      defaultValue: undefined,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
    asChild: undefined,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline Button",
  },
};

export const Link: Story = {
  args: {
    ...Default.args,
    variant: "link",
    children: "Link Button",
  },
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: "destructive",
    children: "Destructive Button",
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const SizeIcon: Story = {
  args: {
    ...Default.args,
    size: "icon",
    children: <HomeIcon />,
  },
};
