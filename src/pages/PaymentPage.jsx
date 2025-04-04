import TablePayments from "../components/TablePayments";
import { DashboardLayout } from "../layouts/DashboardLayout";

const PaymentPage = () => {
  return (
    <DashboardLayout title="Gestionar Pagos">
      <div className="w-full flex flex-col p-2 justify-between">
          <TablePayments />
      </div>
    </DashboardLayout>
  );
};
export default PaymentPage;
