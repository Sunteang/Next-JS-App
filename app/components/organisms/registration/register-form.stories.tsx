import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import RegistrationForm from "./register-form";

const meta: Meta<typeof RegistrationForm> = {
  title: "Components/organisms/RegistrationForm",
  component: RegistrationForm,
};

export default meta;

type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
  args: {
    onSubmit: (email: string, password: string) => {
      console.log("Submitted email:", email);
      console.log("Submitted password:", password);
    },
  },
};

// export const ErrorInvalidEmail: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Type invalid email
//     await userEvent.type(canvas.getByLabelText(/email/i), "invalid-email");

//     // Type valid password and confirm password
//     await userEvent.type(canvas.getByLabelText(/password/i), "password123");
//     await userEvent.type(
//       canvas.getByLabelText(/confirm password/i),
//       "password123"
//     );

//     // Click register
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for the email error message
//     const emailErrorMessage = await canvas.findByText("Invalid email format.");
//     expect(emailErrorMessage).toBeInTheDocument();
//   },
// };

// export const ErrorShortPassword: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Type valid email
//     await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");

//     // Type short password
//     await userEvent.type(canvas.getByLabelText(/password/i), "short");
//     await userEvent.type(canvas.getByLabelText(/confirm password/i), "short");

//     // Click register
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for the password error message
//     const passwordErrorMessage = await canvas.findByText(
//       "Password must be at least 8 characters."
//     );
//     expect(passwordErrorMessage).toBeInTheDocument();
//   },
// };

// export const ErrorPasswordMismatch: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Type valid email
//     await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");

//     // Type valid password
//     await userEvent.type(canvas.getByLabelText(/password/i), "password123");

//     // Type mismatched confirm password
//     await userEvent.type(
//       canvas.getByLabelText(/confirm password/i),
//       "differentPassword"
//     );

//     // Click register
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for the confirm password error message
//     const confirmPasswordErrorMessage = await canvas.findByText(
//       "Passwords do not match."
//     );
//     expect(confirmPasswordErrorMessage).toBeInTheDocument();
//   },
// };
