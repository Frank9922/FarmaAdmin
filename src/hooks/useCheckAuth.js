import { checkingCredentials, login, logout } from '../store/slices/auth/authSlice'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../api/api';


export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  useEffect(() => {

      if (!token) {

        dispatch(logout());
        return;
      }

      dispatch(checkingCredentials());

      api.get('/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((response) => {
      
      dispatch(login(response.data.user));
      navigate('/');

    })

    .catch((error) => {

      localStorage.removeItem('token');
        
     dispatch(logout())

    })


    }, []);

}