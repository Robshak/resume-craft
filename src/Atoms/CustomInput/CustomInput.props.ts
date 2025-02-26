import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface CustomInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string;
}
