import axios from "axios";

const SERVER_URL = "http://localhost:3001/api";

const registerUser = (data) => {
  try {
  return axios.post(SERVER_URL + "/register", data);
  } catch (e) {
    return {
      status: e.status,
      message: e.response.data.message
    }
  }
};

const loginUser = async (data) => {
  
  try {
    const res =  await axios.post(SERVER_URL + "/login", data);
    return res
  } catch (e) {
    return {status: e.status, message: e.response.data.message};
  }
};

const AuthServices = {
  registerUser,
  loginUser,
};

export default AuthServices;
