

import React, { useState } from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess(false);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      // Simulate API request
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "test@example.com" && password === "password123") {
            onSubmit(email, password);
            setSuccess(true);
            resolve(true);
          } else if (email !== "test@example.com") {
            setErrors({ email: "Invalid email address." });
            reject(new Error("Invalid email"));
          } else if (password !== "password123") {
            setErrors({ password: "Incorrect password." });
            reject(new Error("Incorrect password"));
          }
        }, 1000);
      });
    } catch (error) {
      // Handle error (if any)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        noValidate
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
        {errors.email && (
          <div className="text-red-500 mb-2">{errors.email}</div>
        )}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.password
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
        {errors.password && (
          <div className="text-red-500 mb-4">{errors.password}</div>
        )}
        <button
          type="submit"
          className={`w-full py-2 px-4 font-semibold rounded-md shadow-sm ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success && (
          <div className="text-green-500 mt-4 text-center">
            Login successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
