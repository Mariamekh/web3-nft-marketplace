import React from "react";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}
export default function Button({
  label,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseClass =
    variant === "primary"
      ? "bg-primary text-white px-8 py-4 rounded-full  bg-purple-700 hover:bg-purple-800"
      : "border border-white text-white px-8 py-4 rounded-full hover:bg-gray-800";
  return (
    <button className={`${baseClass} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
