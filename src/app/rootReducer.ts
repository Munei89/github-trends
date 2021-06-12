import { combineReducers } from "@reduxjs/toolkit";

import login from "app/pages/Login/slice";

const rootReducer = combineReducers({
  login,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
