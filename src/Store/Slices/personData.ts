import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const PERSON_DATA_SLICE_NAME = "personData";

export interface SoloFields {
  name: string;
  surname: string;
}

export interface PersonDataState {
  soloFields: SoloFields;
}

const initialState: PersonDataState = {
  soloFields: { name: "", surname: "" },
};

export const personDataSlice = createSlice({
  name: PERSON_DATA_SLICE_NAME,
  initialState,
  reducers: {
    setSoloField: (
      state,
      action: PayloadAction<{ field: keyof SoloFields; value: string }>
    ) => {
      state.soloFields[action.payload.field] = action.payload.value;
    },
  },
});

export const { setSoloField } = personDataSlice.actions;
export default personDataSlice.reducer;
