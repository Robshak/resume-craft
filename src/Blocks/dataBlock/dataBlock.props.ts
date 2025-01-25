import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface dataBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  placeholder: string;
  className?: string;
}
