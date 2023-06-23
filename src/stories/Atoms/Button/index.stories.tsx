// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../../../components/Button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    size: "md",
    // onClick: () => alert('button')
  }
}
export const Secondary: Story = {
  args: {
    children: "Button",
    size: "md",
    mode: "secondary",
    // onClick: () => alert('button')
  }
}
export const Thirdly: Story = {
  args: {
    children: "Button",
    size: "md",
    mode: "thirdly",
    // onClick: () => alert('button')
  }
}

export const Small: Story = {
  args: {
    children: "button",
    size: "sm",
    // onClick: () => alert('button')
  }
}
export const Medium: Story = {
  args: {
    children: "button",
    size: "md",
    // onClick: () => alert('button')
  }
}
export const Large: Story = {
  args: {
    children: "button",
    size: "lg",
    // onClick: () => alert('button')
  }
}
