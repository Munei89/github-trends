import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { useSelector } from "react-redux";
import { RootState } from "types/RootState";

export const selectDomain = (state: RootState) => state?.home || initialState;

export const select = () => createSelector([selectDomain], (state) => state);

// eslint-disable-next-line
export default () => useSelector(select());
