import axios from 'axios';

//connect animal crossing new horizons api url
const acnhUrl = 'https://acnhapi.com/v1a/'

export const acnhApi = axios.create({
  baseURL: acnhUrl
})