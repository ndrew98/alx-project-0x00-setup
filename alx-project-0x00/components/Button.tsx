import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  variant = "primary",
  onClick,
  disabled,
  className,
}) => {
  // Define button styles based on props
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  const shapeStyles = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    outline: "border border-gray-500 text-gray-500",
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-current";

  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${
    shapeStyles[shape]
  } ${variantStyles[variant]} ${disabled ? disabledStyles : ""} ${
    className || ""
  }`
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
