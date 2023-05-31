import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  name: null,
  password: null,
  id: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
