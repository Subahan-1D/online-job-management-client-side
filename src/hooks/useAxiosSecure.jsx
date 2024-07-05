import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate()
  // interceptors
  axiosSecure.interceptors.response.use(
    (res) => {
        // console.log('responce app a asar age ami thamiya dekhici ki ace er vitor', res)
      return res;
    },
    async (error) => {
      console.log("Error from interceptors", error.response);
      if (error.response.status === 401 || error.response.status === 403) {
       await logOut();
        navigate('/login')
      }
      return Promise.reject(error)
    }
  );

  // axios.interceptors.request
  return axiosSecure;
};

export default useAxiosSecure;
