import { combineReducers } from "@reduxjs/toolkit";

import home from "app/pages/Home/slice";

const rootReducer = combineReducers({
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
