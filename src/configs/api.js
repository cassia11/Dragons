import axios from "axios";

const API = process.env.API_URL
const API_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'

export default axios.create({
  baseURL: API_URL,
  responseType: 'json'
});