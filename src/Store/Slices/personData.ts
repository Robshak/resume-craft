import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const PERSON_DATA_SLICE_NAME = "personData";

export interface SoloFields {
  picture: string;
  name: string;
  surname: string;
  inGeneral: string;
  activity: string;
}

export interface elementWithId {
  id: string;
  value: string;
}

export interface MultiFields {
  contacts: elementWithId[];
  education: elementWithId[];
  experience: elementWithId[];
  skills: elementWithId[];
  ahcivments: elementWithId[];
  personalQualities: elementWithId[];
  urls: elementWithId[];
  projects: elementWithId[];
}

export interface PersonDataState {
  soloFields: SoloFields;
  multiFields: MultiFields;
}

const initialState: PersonDataState = {
  soloFields: {
    picture: "",
    name: "",
    surname: "",
    inGeneral: "",
    activity: "",
  },
  multiFields: {
    contacts: [],
    education: [],
    experience: [],
    skills: [],
    ahcivments: [],
    personalQualities: [],
    urls: [],
    projects: [],
  },
};

export const personDataSlice = createSlice({
  name: PERSON_DATA_SLICE_NAME,
  initialState,
  reducers: {
    setSoloField: (
      state,
      action: PayloadAction<{
        field: keyof SoloFields;
        value: string;
      }>
    ) => {
      state.soloFields[action.payload.field] = action.payload.value;
    },
    // _________________________MultiField_________________________
    pushMultiField: (
      state,
      action: PayloadAction<{
        field: keyof MultiFields;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state.multiFields[field].push({
        value: value,
        id: crypto.randomUUID(),
      });
    },
    setMultiField: (
      state,
      action: PayloadAction<{
        field: keyof MultiFields;
        value: string;
        index: string;
      }>
    ) => {
      const { field, value, index } = action.payload;
      state.multiFields[field] = state.multiFields[field].map(
        (item) => {
          if (item.id === index) {
            return { ...item, value };
          }
          return item;
        }
      );
    },
    removeMultiField: (
      state,
      action: PayloadAction<{
        field: keyof MultiFields;
        index: string;
      }>
    ) => {
      const { field, index } = action.payload;
      state.multiFields[field] = state.multiFields[field].filter(
        (item) => item.id !== index
      );
    },
  },
});

export const {
  setSoloField,
  pushMultiField,
  setMultiField,
  removeMultiField,
} = personDataSlice.actions;
export default personDataSlice.reducer;
