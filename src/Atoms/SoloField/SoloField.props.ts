import { SoloFields } from "@/Store/Slices/personData";
import { CustomInputProps } from "../CustomInput/CustomInput.props";

export interface SoloFieldProps extends CustomInputProps {
  fieldName: keyof SoloFields;
}
