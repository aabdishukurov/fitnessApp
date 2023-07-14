// !!! ВРЕМЕННЫЙ РЕДЮСЕР ДЛЯ ДЕМОНСТРАЦИИ РАБОТЫ
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proStatus: false,
};

const ProSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    getPro: (state) => {
      state.proStatus = true;
    },
  },
});

export const { getPro } = ProSlice.actions;
export default ProSlice.reducer;
