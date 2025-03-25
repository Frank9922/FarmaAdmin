import { Route, Routes } from "react-router-dom";
import { UserPage } from "../pages/UserPage";
import { LoginPage } from "../pages/LoginPage";
import PaymentPage from "../pages/PaymentPage";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/payments" element={<PaymentPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
