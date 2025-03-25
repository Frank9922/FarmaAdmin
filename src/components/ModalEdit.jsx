import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
const ModalEdit = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón que abre el modal */}
      <button onClick={openModal}>
        <AdjustmentsHorizontalIcon width={25} className="iconBtn" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className=" modal">
          <div className="modalContainer ">
            <span className="modalClose" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modalTitle">Editar Usuario</h2>
            <div className="modalBody">
              <div className="cont-input">
                <label htmlFor="user_id" className="label-input">
                  Nombre
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="user_id"
                  value={user.name}
                />
              </div>

              <div className="cont-input">
                <label htmlFor="email" className="label-input">
                  Correo
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="email"
                  value={user.email}
                />
              </div>
              <div className="cont-input">
                <label htmlFor="type" className="label-input">
                  Tipo usuario
                </label>
                <select className="input" name="" id="type">
                  <option value="">Administrador</option>
                  <option value="">Usuario</option>
                </select>
              </div>
              {/* <div className="cont-input">
                <div className="block text-gray-900 mb-1">
                  Cambiar estado de la Subscripción
                </div>
                <div>
                  <input type="radio" name="status" id="active" />
                  <label htmlFor="active">Activo</label>
                </div>
                <div>
                  <input type="radio" name="status" id="inactive" />
                  <label htmlFor="inactive">Inactivo</label>
                </div>
              </div> */}
            </div>
            <div className="flex justify-end gap-1">
              <button className="btn-cancel" onClick={closeModal}>
                Cancelar
              </button>
              <button className="btn-save">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEdit;
