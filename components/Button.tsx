'use client';

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, type, styles, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`${styles} btn`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
};

export default Button;