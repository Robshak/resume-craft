import { combineReducers } from "@reduxjs/toolkit";
import personDataReducer, { PERSON_DATA_SLICE_NAME } from "./Slices/personData";

const rootReducer = combineReducers({
  [PERSON_DATA_SLICE_NAME]: personDataReducer,
});

export default rootReducer;
