import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./buttonAction";

export default {
  title: "Components/atoms/Button Action",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "danger"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
    onClick: () => alert("Primary button clicked"),
  },
};
