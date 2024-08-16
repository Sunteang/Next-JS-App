import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import LoginForm from "./loginForm"; // Ensure the file name is correct

export default {
  title: "Components/organisms/LoginForm",
  component: LoginForm,
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (email: string, password: string) => {
    console.log("Submitted email:", email);
    console.log("Submitted password:", password);
  },
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Simulate user filling out the form
  await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
  await userEvent.type(canvas.getByLabelText(/password/i), "password123");

  // Simulate form submission
  await userEvent.click(canvas.getByRole("button", { name: /submit/i }));

  // Check for error messages (if any)
  const errorMessages = canvas.queryByText(
    /Invalid email address\.|Incorrect password\./
  );
  if (errorMessages) {
    console.log("Error messages:", errorMessages.textContent);
  } else {
    console.log("No error messages found.");
  }

  // Check for success message
  const successMessage = canvas.queryByText(/Login successful!/);
  if (successMessage) {
    console.log("Success message:", successMessage.textContent);
  } else {
    console.log("No success message found.");
  }
};
