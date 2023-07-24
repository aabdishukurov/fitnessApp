import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
import Cookies from "js-cookie";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { email: userEmail, uid: id, accessToken } = userCredential.user;
      return { userEmail, accessToken, id };
    } catch (error) {
      console.error(error);
      rejectWithValue(error, "error");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, userName }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { email: userEmail, uid: id, accessToken } = userCredential.user;
      return { userEmail, accessToken, id, userName };
    } catch (error) {
      console.error(error);
      rejectWithValue(error, "error");
    }
  }
);
const provider = new GoogleAuthProvider();
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { dispatch }) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          userName: user.displayName,
        })
      );
      Cookies.set(user.accessToken);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  userName: null,
  email: null,
  id: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.displayName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.error = null;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.userName = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.email = action.payload.userEmail;
      state.id = action.payload.id;
      Cookies.set("user_token", action.payload.accessToken);
      Cookies.set("userName", action.payload.userName);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.email = action.payload.userEmail;
      state.id = action.payload.id;
      Cookies.set("user_token", action.payload.accessToken);
      Cookies.set("userName", action.payload.userName);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(googleLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      Cookies.set("user_token", action.payload.accessToken);
      Cookies.set("userName", action.payload.displayName);
    });
    builder.addCase(googleLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
