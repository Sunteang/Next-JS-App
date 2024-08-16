import React from "react";
import "./button01.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "primary",
  disabled = false,
}) => {
  const buttonStyle = `button-base ${
    disabled
      ? "button-disabled"
      : type === "primary"
        ? "button-primary"
        : "button-secondary"
  }`;

  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
