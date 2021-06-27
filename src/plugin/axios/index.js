import axios from "axios";

console.log(process.env.VUE_APP_API_URL);
console.log(process.env.VUE_APP_API_KEY);

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default instance;
