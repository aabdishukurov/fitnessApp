import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUser from "./slices/authUser";
import NutririosReducer from "./nutritios/NutririosSlice";
import ProReducer from "./pro/proSlice";

const reducers = combineReducers({
  auth: authUser,
  ProReducer,
  NutririosReducer,
});

export const store = configureStore({
  reducer: reducers,
});
