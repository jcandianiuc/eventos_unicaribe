import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337";

const auth = token => {
  axios.defaults.params = { token };
};

export default {
  auth,
  login: loginParams => axios.post("/login", loginParams)
};
