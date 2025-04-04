import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useSelector } from "react-redux";
import { estados } from "../store/slices/auth/estados";
import { DashboardRoute } from "./DashboardRoute";

export const AppRoute = () => {

  const status = useSelector(state => state.auth.estado);

  const location = useLocation();

  useCheckAuth();

  return (
    <Routes location={location} key={location.pathname}>
      

      {
        status === estados.autenticado ?
        <>
              <Route path="/" element={<DashboardRoute/>} />
              <Route path="/*" element={<DashboardRoute/>} />
              <Route path="/login" element={<Navigate to="/"/>} />

        </>
        :(
        <>    
              <Route path="/*" element={<Navigate to='/login' />} />
              <Route path="/login" element={<LoginPage />} />

        </>
        )
      }



    </Routes>
  );
};
