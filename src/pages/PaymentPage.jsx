import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeftColumn from "../components/LeftColumn";
import TablePayments from "../components/TablePayments";

const PaymentPage = () => {
  return (
    <>
      <main className="flex ">
        <Sidebar />
        <div className="flex flex-col flex-1 relative">
          <Navbar title={"Gestionar Pagos"} />

          <div className="grid md:grid-cols-1 grid-cols-1 w-full">
            <div className="col-span-2">
              <div className="w-full flex flex-col p-2 justify-between">
                <div>
                  <TablePayments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default PaymentPage;
