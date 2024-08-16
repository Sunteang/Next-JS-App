import React from "react";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  children,
  className = "",
}) => {
  const baseStyles = "px-4 py-2  font-semibold rounded";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };
  const sizeStyles = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  return (
    <button
      className={`${classes} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
