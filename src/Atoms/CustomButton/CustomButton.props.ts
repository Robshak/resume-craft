import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  inscription?: string;
}
