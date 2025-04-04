import { login, checkingCredentials, logout } from "../store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";



export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  useEffect(() => {

    dispatch(checkingCredentials());

      if (!token) {

        dispatch(logout());
        return;
      }

      api.get('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
      
      dispatch(login(response.data.user));
      
      navigate('/users');

    })

    .catch((error) => {

      console.log(error);
      localStorage.removeItem('token');
        
     dispatch(logout())

    })


    }, []);

}