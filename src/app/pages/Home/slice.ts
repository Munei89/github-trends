import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "app/store";
import { getRepos } from "api";
import { IGitHubState, IRepositeries } from "types";

export const initialState: IGitHubState = {
  loading: false,
  error: false,
  repos: [],
  developers: [],
};

const homeSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    getAllRepos(state) {
      state.loading = true;
    },
    getAllReposSuccess(state, action: PayloadAction<IRepositeries[]>) {
      state.loading = false;
      state.repos = action.payload;
    },
    getAllReposError(state) {
      state.error = true;
      state.loading = false;
    },
  },
});
export const { getAllRepos } = homeSlice.actions;

export const loadRepos = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(homeSlice.actions.getAllRepos());
  const todos = await getRepos();

  if (todos.length > 0) {
    dispatch(homeSlice.actions.getAllReposSuccess(todos));
  }
};

export default homeSlice.reducer;
