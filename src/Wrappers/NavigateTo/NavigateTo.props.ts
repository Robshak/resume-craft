import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NavigateToProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  to: string;
  component: ReactNode;
}
