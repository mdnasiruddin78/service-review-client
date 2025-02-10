import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";


 const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logoutUser } = useContext(AuthContext)
    useEffect(() => {
      axiosSecure.interceptors.response.use(
        res => {
          return res
        },
        async error => {
          console.log(
            'error caught from our very own axios interceptor-->',
            error.response
          )
          if (error.response.status === 401 || error.response.status === 403) {
            // logout
            logoutUser()
            // navigate to login
            navigate('/login')
          }
        }
      )
    }, [logoutUser, navigate])
    return axiosSecure
  }
  
  export default useAxiosSecure