import { MultiFields } from "@/Store/Slices/personData";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DataBlockProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fieldName: keyof MultiFields;
  title: string;
  placeholder: string;
  className?: string;
}
