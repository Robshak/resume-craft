import { useDispatch, useSelector } from "react-redux";
import { SoloFieldProps } from "./SoloField.props";
import { setSoloField } from "@/Store/Slices/personData";
import { RootState } from "@/Store/store";
import { ChangeEvent, cloneElement, isValidElement } from "react";

export default function SoloField({
  fieldName,
  component,
  ...props
}: SoloFieldProps) {
  const value = useSelector(
    (state: RootState) => state.personData.soloFields[fieldName]
  );
  const dispatch = useDispatch();

  if (isValidElement(component)) {
    return cloneElement(component, {
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        dispatch(setSoloField({ field: fieldName, value: e.target.value })),
      value,
      ...props,
    });
  }

  return null;
}
