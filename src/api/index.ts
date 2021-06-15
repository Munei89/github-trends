import axios from "axios";
import { IDeveloper, IRepositeries } from "../types";

const baseUrl = `/api/`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  crossorigin: true,
  withCredentials: false,
  "Content-Type": "application/json",
};

export async function getRepos() {
  const response = await axios.get<IRepositeries[]>(baseUrl + `repositories`, {
    headers,
    method: "GET",
  });

  return response.data;
}

export async function getDevelopers() {
  const response = await axios.get<IDeveloper[]>(baseUrl + `developers`, {
    headers,
    method: "GET",
  });

  return response.data;
}
