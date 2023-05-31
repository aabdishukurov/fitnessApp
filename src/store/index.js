import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/ruslan/userSlice";

const reducers = combineReducers({
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
