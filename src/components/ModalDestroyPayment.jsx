import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { isAfter, subMinutes } from 'date-fns';
import { useDestroyPaymentMutation } from "../store/api/adminApi";

export const ModalDestroyPayment = ({ payment }) => {

  const [deletePayment, {isLoading, error, isSuccess}] = useDestroyPaymentMutation();

  const createdAt = new Date(payment.created_at);

  const limitTime = subMinutes(new Date(), 30);

  const showComponent = isAfter(createdAt, limitTime);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onDelete = async() => {

    await deletePayment(payment.id).unwrap()

    if(isSuccess) setIsOpen(false);

  } 

  return (
    <div>
      {showComponent && (
        <button onClick={openModal}>
          <TrashIcon width={25} className="iconBtn" />
        </button>
      )}

      {isOpen && (
        <div className="modal">
          <div className="modalContainer">
            <span className="modalClose" onClick={closeModal}>
              &times;
            </span>
            <h2 className="modalTitle">¿Estas seguro de eliminar?</h2>
            <div className="modalBody">
              <div className="cont-input">
                <label htmlFor="user_id" className="label-input">
                  Esta acción no podra revertirse.
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-1">
              <button className="btn-save" onClick={onDelete}>
                Si
              </button>
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
