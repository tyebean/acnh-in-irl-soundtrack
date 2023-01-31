import { acnhApi } from "./apiConfig";

export const getHourly = async () => {
    const res = await acnhApi.get('/hourly')
    return res.data
}

//k.k. slider tracks
export const getMusic = async () => {
  const res = await acnhApi.get('/music')
  return res.data
}

