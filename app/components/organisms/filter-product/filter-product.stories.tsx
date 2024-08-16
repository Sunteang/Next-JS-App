import React, { Component } from "react";
import { within, userEvent } from "@storybook/testing-library";
import filter_product from "./filter-product";

export default {
  title: "components/organisms/filter-product",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const filterableProductTable = Template.bind({});

export const onlyAvailable = Template.bind({});

onlyAvailable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const onlyShowAvailableButton =
    await canvas.getByLabelText("Only show product");

  await userEvent.click(onlyShowAvailableButton);
};

export const searchFruit = Template.bind({});
searchFruit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const searchInput = await canvas.getByPlaceholderText("search...");

  await userEvent.click(searchInput);
  await userEvent.keyboard("fruit");
};
