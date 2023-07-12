import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";
import authUser from "./slices/authUser";

const reducers = combineReducers({
  auth: authUser,
});

export const store = configureStore({
  reducer: reducers,
});
