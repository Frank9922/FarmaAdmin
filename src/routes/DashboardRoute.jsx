import { Navigate, Route, Routes } from "react-router-dom";
import { UserPage } from "../pages/UserPage";
import PaymentPage from "../pages/PaymentPage";

export const DashboardRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/payments" element={<PaymentPage />} />

    </Routes>
  );
};
