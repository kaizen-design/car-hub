import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  type?: "button" | "submit";
  styles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface filterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export interface HomeProps {
  searchParams: filterProps;
}