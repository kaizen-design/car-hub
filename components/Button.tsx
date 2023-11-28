'use client';

import { ButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ title, type, styles, textStyles, rightIcon, isDisabled, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={type || "button"}
      className={`${styles} btn`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image 
            src={rightIcon}
            fill
            className="object-contain"
            alt={title}
          />
        </div>
      )}
    </button>
  )
};

export default Button;