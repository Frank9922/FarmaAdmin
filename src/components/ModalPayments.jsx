import React, { useState } from "react";
import { BanknotesIcon } from "@heroicons/react/24/solid";
const ModalPayments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón que abre el modal */}
      <button onClick={openModal} className="btn-save">
        Registrar Pago
      </button>

      {/* Modal */}
      {isOpen && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 bg-[#0f0f0fb7] flex justify-center items-center">
          <div className=" relative bg-white p-5 rounded w-3/6">
            <span
              className="absolute top-0 right-3 cursor-pointer text-2xl"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-lg font-bold text-black mb-2">
              Registrar Pago
            </h2>
            <div className="border-b border-gray-900/10 pb-6 mb-2">
              <div className="mb-2">
                <label
                  htmlFor="user_id"
                  className="block font-medium text-gray-900 mb-1"
                >
                  Nombre
                </label>
                <input
                  className="w-full text-base rounded focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600"
                  type="text"
                  name="name"
                  id="user_id"
                  value=""
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="ends_at"
                  className="block font-medium text-gray-900 mb-1"
                >
                  Periodo
                </label>
                <input
                  className="w-full text-base rounded focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600"
                  type="date"
                  name="ends_at"
                  id="ends_at"
                  value=""
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="type"
                  className="block font-medium text-gray-900 mb-1"
                >
                  Forma de pago
                </label>
                <select
                  className="w-full text-base rounded focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600"
                  name=""
                  id="type"
                >
                  <option value="">Efectivo</option>
                  <option value="">Tranferencia</option>
                </select>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-900 mb-1"
                >
                  Monto (pesos)
                </label>
                <input
                  className="w-full text-base rounded focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600"
                  type="number"
                  name="name"
                  id="amoun"
                />
              </div>
            </div>
            <div className="flex justify-end gap-1">
              <button
                className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-700"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700">
                Registrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPayments;
