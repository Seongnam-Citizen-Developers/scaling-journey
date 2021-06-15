import axios, { AxiosRequestConfig } from "axios";
import { URLS } from "../constants";
import { game } from "./interfaces";

export interface resGetBoardgameApi {
  games: game[]
  count: number
}

export const getBoardgames = async (params: any): Promise<game[]> => {

  const config: AxiosRequestConfig = {
    params: {...params, client_id: process.env.REACT_APP_CLIENT_ID}
  }
  const res = await axios.get<resGetBoardgameApi>(`${URLS.boardgame}/search`, config)
  return res.data.games
}