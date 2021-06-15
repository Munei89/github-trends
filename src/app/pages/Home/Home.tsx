import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadRepos } from "./slice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRepos());
  }, [dispatch]);

  return <>Home</>;
}
