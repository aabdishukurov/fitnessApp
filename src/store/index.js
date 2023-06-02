import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/ruslan/authSlice";

const reducers = combineReducers({
  auth: authSlice,
});

export const store = configureStore({
  reducer: reducers,
});
