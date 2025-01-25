import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";
import { SoloFieldProps } from "./SoloField.props";
import { setSoloField } from "@/Store/Slices/personData";
import { RootState } from "@/Store/store";

export default function SoloField({ fieldName, ...props }: SoloFieldProps) {
  const value = useSelector(
    (state: RootState) => state.personData.soloFields[fieldName]
  );
  const dispatch = useDispatch();

  return (
    <CustomInput
      onChange={(e) =>
        dispatch(setSoloField({ field: fieldName, value: e.target.value }))
      }
      value={value}
      {...props}
    ></CustomInput>
  );
}
