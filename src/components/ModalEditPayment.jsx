import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

export const ModalEditPayment = ({ payment }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(payment);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón que abre el modal */}
      <button onClick={openModal}>
        <EyeIcon width={25} className="iconBtn" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className=" modal">
          <div className="modalContainer ">
            <span className="modalClose" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modalTitle">
              Informacion pago - {payment.subscription.user.name}
            </h2>
            <div className="modalBody">
              <div className="dataPersonal">
                <h3 className="font-semibold text-black">Datos Personales</h3>
                <div className="flex flex-wrap p-3 justify-between">
                  <p>
                    <span className="underline">Fecha</span>:{" "}
                    {payment.created_at}
                  </p>
                  <p>
                    <span className="underline">Forma de Pago</span>:{" "}
                    {payment.payment_method}
                  </p>
                  <p>
                    <span className="underline">Monto</span>: ${payment.amount}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-1">
              <button className="btn-cancel" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
