import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string,
  type?: "button" | "submit",
  styles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}