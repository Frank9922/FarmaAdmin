import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
const ModalSee = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="modalContainer">
            <span className="modalClose" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modalTitle">Datos Usuario {user.name}</h2>
            <div className="modalBody">
              <div className="dataPersonal">
                <h3 className="font-semibold text-black">Datos Personales</h3>
                <div className="flex flex-wrap p-3 justify-between">
                  <p>
                    <span className="underline">Nombre</span>: {user.name}
                  </p>
                  <p>
                    <span className="underline">Tipo</span>: {user.rol}
                  </p>
                  <p>
                    <span className="underline">Correo</span>: {user.email}
                  </p>
                </div>
              </div>
              {user.subscription && (
              <div className="dataSubscription">
                <h3 className="font-semibold text-black">
                  Datos Suscripción y pagos
                </h3>
                <div className="flex flex-wrap p-3 justify-between">
                  <p>
                    <span className="underline">Suscripción</span>:{" "}
                    {user.subscription.status}
                  </p>
                  <p>
                    <span className="underline">Tipo Subscripción</span>:{" "}
                    {user.subscription.type}
                  </p>
                  <p>
                    <span className="underline">Vto.</span>:{" "}
                    {user.subscription.ends_at}
                  </p>
                </div>
              </div>
            )}
            </div>
            <div className="flex justify-end gap-1">
              <button className="btn-cancel" onClick={closeModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSee;
