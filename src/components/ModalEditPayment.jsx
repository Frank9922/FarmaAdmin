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
                />
              </div>

              <div className="cont-input">
                <label htmlFor="email" className="label-input">
                  Correo
                </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  id="email"
                />
              </div>
              <div className="cont-input">
              <label htmlFor="profesion" className="label-input">
                
              </label>
            </div>;

              <div className="cont-input">
                <label htmlFor="rol" className="label-input">
                  Tipo usuario
                </label>
                <select
                  className="input"
                  name="rol"
                  id="rol"
                >
                  <option value="admin">Administrador</option>
                  <option value="user">Usuario</option>
                </select>
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

