import axios from "axios";
import { IRepositeries } from "../types";

const baseUrl = `https://gh-trending-api.herokuapp.com/`;

export async function getRepos() {
  const response = await axios.get<IRepositeries[]>(baseUrl + `repositories`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.data;
}
