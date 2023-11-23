import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string,
  type?: "button" | "submit",
  styles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void
}

export interface CustomFilterProps {
  title: string
}