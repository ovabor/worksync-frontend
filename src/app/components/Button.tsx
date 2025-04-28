"use client";
import { useState } from "react";

interface ButtonProps {
  color: string;
  bgColor: string;
  hoverBgColor: string;
  content: string;
}

const Button = ({ color, bgColor, hoverBgColor, content }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="font-lato text-xs px-6 py-3 rounded-xl font-semibold transition-colors duration-300 cursor-pointer rounded-full"
      style={{
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        color: color,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

export default Button;
