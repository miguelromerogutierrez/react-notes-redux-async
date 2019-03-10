import axios from "axios";

export const getUserByEmail = email =>
  axios
    .get(`https://5c841e7fafa21a0014300191.mockapi.io/api/v1/login`, {
      params: {
        search: email
      }
    })
    .then(({ data }) => data);

export const postRegisterUser = body =>
  axios
    .post("https://5c841e7fafa21a0014300191.mockapi.io/api/v1/register", body)
    .then(({ data }) => data);
