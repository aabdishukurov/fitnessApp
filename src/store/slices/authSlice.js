import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api/apiUsers";
import Cookies from "js-cookie";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      const response = await api.post("users", userData);
      return response; //Ответом должен получить JWT token
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await api.post("/login", userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (accessToken) => {
    try {
      const response = await api.post("/google-login", { accessToken });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isAvailableEmail: false,
    token: Cookies.get("token"),
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      Cookies.remove("token");
      state.user = null;
      state.token = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;

        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // .addCase(logoutUser.pending, (state) => {
      //   state.isLoading = true;
      //   state.error = null;
      // })
      // .addCase(logoutUser.fulfilled, (state) => {
      //   state.isLoading = false;
      //   state.isAuthenticated = false;
      //   state.user = null;
      // })
      // .addCase(logoutUser.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.error.message;
      // })
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;