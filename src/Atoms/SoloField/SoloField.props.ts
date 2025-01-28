import { SoloFields } from "@/Store/Slices/personData";
import { CustomInputProps } from "../CustomInput/CustomInput.props";
import { ReactNode } from "react";

export interface SoloFieldProps extends CustomInputProps {
  fieldName: keyof SoloFields;
  component: ReactNode;
}
