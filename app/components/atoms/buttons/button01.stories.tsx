import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./button01";

export default {
  // tags: ["autodocs"],
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  type: "primary",
  onClick: action("primary-click"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  type: "secondary",
  onClick: action("secondary-click"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  type: "primary",
  disabled: true,
};
