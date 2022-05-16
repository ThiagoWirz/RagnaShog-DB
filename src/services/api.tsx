import axios from "axios";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export async function getMonster(pageNumber: number) {
  return baseAPI.get(`/monsters?page=${pageNumber}`);
}
