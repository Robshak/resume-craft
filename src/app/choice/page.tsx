"use client";

import { RootState } from "@/Store/store";
import { useSelector } from "react-redux";

export default function Choice() {
  const name = useSelector(
    (state: RootState) => state.personData.soloFields.name
  );
  const surname = useSelector(
    (state: RootState) => state.personData.soloFields.surname
  );

  return (
    <>
      <div>{name}</div>
      <div>{surname}</div>
    </>
  );
}
