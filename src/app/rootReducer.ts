import { combineReducers } from "@reduxjs/toolkit";

import login from "app/pages/Login/slice";
import home from "app/pages/Home/slice";

const rootReducer = combineReducers({
  login,
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
