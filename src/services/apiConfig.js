import axios from 'axios';

//connect animal crossing new horizons api url
const acnhUrl = 'https://acnhapi.com/v1a/'

const weatherUrl = 'https://api.weather.gov/'

export const acnhApi = axios.create({
  baseURL: acnhUrl
})

export const weatherApi = axios.create({
  baseURL: weatherUrl
})