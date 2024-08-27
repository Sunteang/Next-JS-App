// import React, { useState } from "react";

// interface RegistrationFormProps {
//   onSubmit: (email: string, password: string) => void;
// }

// const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState<{
//     email?: string;
//     password?: string;
//     confirmPassword?: string;
//   }>({});
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const validate = () => {
//     const newErrors: {
//       email?: string;
//       password?: string;
//       confirmPassword?: string;
//     } = {};
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) newErrors.email = "Email is required.";
//     else if (!emailPattern.test(email))
//       newErrors.email = "Invalid email format.";

//     if (!password) newErrors.password = "Password is required.";
//     else if (password.length < 8)
//       newErrors.password = "Password must be at least 8 characters.";

//     if (confirmPassword !== password)
//       newErrors.confirmPassword = "Passwords do not match.";

//     return newErrors;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors({});
//     setSuccess(false);

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setLoading(false);
//       return;
//     }

//     try {
//       // Simulate API request
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           // Simulate successful registration
//           onSubmit(email, password);
//           setSuccess(true);
//           resolve(true);
//         }, 1000);
//       });
//     } catch (error) {
//       // Handle error (if any)
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         noValidate
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
//         {errors.email && (
//           <div className="text-red-500 mb-2">{errors.email}</div>
//         )}
//         {errors.password && (
//           <div className="text-red-500 mb-2">{errors.password}</div>
//         )}
//         {errors.confirmPassword && (
//           <div className="text-red-500 mb-4">{errors.confirmPassword}</div>
//         )}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Email:
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={`w-full px-3 py-2 border rounded-md shadow-sm ${
//               errors.email
//                 ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                 : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//             }`}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Password:
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={`w-full px-3 py-2 border rounded-md shadow-sm ${
//               errors.password
//                 ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                 : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//             }`}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="confirmPassword"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Confirm Password:
//           </label>
//           <input
//             id="confirmPassword"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className={`w-full px-3 py-2 border rounded-md shadow-sm ${
//               errors.confirmPassword
//                 ? "border-red-500 focus:ring-red-500 focus:border-red-500"
//                 : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
//             }`}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className={`w-full py-2 px-4 font-semibold rounded-md shadow-sm ${
//             loading
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-600"
//           } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
//           disabled={loading}
//         >
//           {loading ? "Registering..." : "Register"}
//         </button>
//         {success && (
//           <div className="text-green-500 mt-4 text-center">
//             Registration successful!
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from "react";

interface RegistrationFormProps {
  onSubmit: (email: string, password: string) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) newErrors.email = "Email is required.";
    else if (!emailPattern.test(email))
      newErrors.email = "Invalid email format.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match.";

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
      await new Promise((resolve) => {
        setTimeout(() => {
          // Simulate successful registration
          onSubmit(email, password);
          setSuccess(true);
          resolve(true);
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
        noValidate
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        {errors.email && (
          <div className="text-red-500 mb-2">{errors.email}</div>
        )}
        {errors.password && (
          <div className="text-red-500 mb-2">{errors.password}</div>
        )}
        {errors.confirmPassword && (
          <div className="text-red-500 mb-4">{errors.confirmPassword}</div>
        )}
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
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password:
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md shadow-sm ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 font-semibold rounded-md shadow-sm ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {success && (
          <div className="text-green-500 mt-4 text-center">
            Registration successful!
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
