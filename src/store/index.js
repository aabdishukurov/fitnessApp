import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProReducer from "./pro/proSlice";
import NutririosReducer from "./nutritios/NutririosSlice";

const reducers = combineReducers({
  ProReducer,
  NutririosReducer,
});

export const store = configureStore({
  reducer: reducers,
});
