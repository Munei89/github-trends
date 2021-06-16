import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, AppDispatch } from "app/store";
import { getRepos, getDevelopers } from "api";
import { IDeveloper, IGitHubState, IRepositeries } from "types";

export const initialState: IGitHubState = {
  loading: false,
  error: false,
  repos: [],
  developers: [],
};

const homeSlice = createSlice({
  name: "app",
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

    getAllDevelopers(state) {
      state.loading = true;
    },
    getAllDevelopersSuccess(state, action: PayloadAction<IDeveloper[]>) {
      state.loading = false;
      state.developers = action.payload;
    },
    getAllDevelopersError(state) {
      state.error = true;
      state.loading = false;
    },
  },
});
export const { getAllRepos } = homeSlice.actions;

export const loadRepos = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(homeSlice.actions.getAllRepos());
    const repos = await getRepos();

    if (repos.length > 0) {
      dispatch(homeSlice.actions.getAllReposSuccess(repos));
    }
  } catch (e) {
    dispatch(homeSlice.actions.getAllReposError());
  }
};

export const loadDevelopers = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(homeSlice.actions.getAllDevelopers());
    const developers = await getDevelopers();

    if (developers.length > 0) {
      dispatch(homeSlice.actions.getAllDevelopersSuccess(developers));
    }
  } catch (e) {
    dispatch(homeSlice.actions.getAllDevelopersError());
  }
};

export default homeSlice.reducer;
