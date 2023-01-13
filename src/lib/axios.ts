import axios from "axios";

const applicationState = "production";

export const api = axios.create({
  baseURL:
    applicationState === "production"
      ? "https://my-json-server.typicode.com/davimarcilio/DTMoney"
      : "http://localhost:3000",
});
