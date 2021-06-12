import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "app/store";
import { Login } from "./types";

const initialState: Login = {
  isLoggedIn: false,
  user: "",
  client_id: "",
  redirect_uri: "",
  client_secret: "",
  proxy_url: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    newUser(state, action: PayloadAction<Login>) {
      //   state.push(action.payload);
    },
  },
});

// export const { toggleTodo } = loginSlice.actions;

export const newUser =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newLogin: Login = {
      // @TODO check if this not null
      isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")!),
      user: JSON.parse(localStorage.getItem("user")!),
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
      proxy_url: process.env.REACT_APP_PROXY_URL,
    };

    dispatch(loginSlice.actions.newUser(newLogin));
  };

export default loginSlice.reducer;
