import { CustomInputProps } from "@/Atoms/CustomInput/CustomInput.props";
import { SoloFields } from "@/Store/Slices/personData";
import { ReactNode } from "react";

export interface SoloFieldProps extends CustomInputProps {
  fieldName: keyof SoloFields;
  component: ReactNode;
}
