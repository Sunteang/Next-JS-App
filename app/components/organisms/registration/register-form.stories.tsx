// import type { Meta, StoryObj } from "@storybook/react";
// import RegistrationForm from "./register-form"; // Ensure the file path is correct

// const meta: Meta<typeof RegistrationForm> = {
//   title: "Components/organisms/RegistrationForm",
//   component: RegistrationForm,
// };

// export default meta;

// type Story = StoryObj<typeof RegistrationForm>;

// export const Default: Story = {
//   args: {
//     onSubmit: (email: string, password: string) => {
//       console.log("Submitted email:", email);
//       console.log("Submitted password:", password);
//     },
//   },
// };

// export const ErrorInvalidEmail: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Simulate user filling out the form with invalid email
//     await userEvent.type(canvas.getByLabelText(/email/i), "invalid-email");
//     await userEvent.type(canvas.getByLabelText(/password/i), "password123");
//     await userEvent.type(
//       canvas.getByLabelText(/confirm password/i),
//       "password123"
//     );

//     // Simulate form submission
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for error messages
//     const emailErrorMessage = canvas.queryByText(/Invalid email format./);
//     if (emailErrorMessage) {
//       console.log("Email error message:", emailErrorMessage.textContent);
//     } else {
//       console.log("No email error message found.");
//     }
//   },
// };

// export const ErrorShortPassword: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Simulate user filling out the form with a short password
//     await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
//     await userEvent.type(canvas.getByLabelText(/password/i), "short");
//     await userEvent.type(canvas.getByLabelText(/confirm password/i), "short");

//     // Simulate form submission
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for error messages
//     const passwordErrorMessage = canvas.queryByText(
//       /Password must be at least 6 characters./
//     );
//     if (passwordErrorMessage) {
//       console.log("Password error message:", passwordErrorMessage.textContent);
//     } else {
//       console.log("No password error message found.");
//     }
//   },
// };

// export const ErrorPasswordMismatch: Story = {
//   args: {
//     onSubmit: () => {},
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Simulate user filling out the form with mismatched passwords
//     await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
//     await userEvent.type(canvas.getByLabelText(/password/i), "password123");
//     await userEvent.type(
//       canvas.getByLabelText(/confirm password/i),
//       "differentpassword"
//     );

//     // Simulate form submission
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for error messages
//     const confirmPasswordErrorMessage = canvas.queryByText(
//       /Passwords do not match./
//     );
//     if (confirmPasswordErrorMessage) {
//       console.log(
//         "Confirm password error message:",
//         confirmPasswordErrorMessage.textContent
//       );
//     } else {
//       console.log("No confirm password error message found.");
//     }
//   },
// };

// export const SuccessRegistration: Story = {
//   args: {
//     onSubmit: (email: string, password: string) => {
//       console.log("Submitted email:", email);
//       console.log("Submitted password:", password);
//     },
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Simulate user filling out the form with valid inputs
//     await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
//     await userEvent.type(canvas.getByLabelText(/password/i), "password123");
//     await userEvent.type(
//       canvas.getByLabelText(/confirm password/i),
//       "password123"
//     );

//     // Simulate form submission
//     await userEvent.click(canvas.getByRole("button", { name: /register/i }));

//     // Check for success message
//     const successMessage = canvas.queryByText(/Registration successful!/);
//     if (successMessage) {
//       console.log("Success message:", successMessage.textContent);
//     } else {
//       console.log("No success message found.");
//     }
//   },
// };

// register-form.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
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

export const ErrorInvalidEmail: Story = {
  args: {
    onSubmit: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user filling out the form with an invalid email
    await userEvent.type(canvas.getByLabelText(/email/i), "invalid-email");
    await userEvent.type(canvas.getByLabelText(/password/i), "password123");
    await userEvent.type(
      canvas.getByLabelText(/confirm password/i),
      "password123"
    );

    // Simulate form submission
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Check for email error message
    const emailErrorMessage = canvas.queryByText(/Invalid email format./);
    expect(emailErrorMessage).toBeInTheDocument();
  },
};

export const ErrorShortPassword: Story = {
  args: {
    onSubmit: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user filling out the form with a short password
    await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "short");
    await userEvent.type(canvas.getByLabelText(/confirm password/i), "short");

    // Simulate form submission
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Check for password error message
    const passwordErrorMessage = canvas.queryByText(
      /Password must be at least 8 characters./
    );
    expect(passwordErrorMessage).toBeInTheDocument();
  },
};

export const ErrorPasswordMismatch: Story = {
  args: {
    onSubmit: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user filling out the form with mismatched passwords
    await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "password123");
    await userEvent.type(
      canvas.getByLabelText(/confirm password/i),
      "differentpassword"
    );

    // Simulate form submission
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Check for password mismatch error message
    const confirmPasswordErrorMessage = canvas.queryByText(
      /Passwords do not match./
    );
    expect(confirmPasswordErrorMessage).toBeInTheDocument();
  },
};

export const SuccessRegistration: Story = {
  args: {
    onSubmit: (email: string, password: string) => {
      console.log("Submitted email:", email);
      console.log("Submitted password:", password);
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate user filling out the form with valid inputs
    await userEvent.type(canvas.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(canvas.getByLabelText(/password/i), "password123");
    await userEvent.type(
      canvas.getByLabelText(/confirm password/i),
      "password123"
    );

    // Simulate form submission
    await userEvent.click(canvas.getByRole("button", { name: /register/i }));

    // Check for success message
    const successMessage = canvas.queryByText(/Registration successful!/);
    expect(successMessage).toBeInTheDocument();
  },
};
