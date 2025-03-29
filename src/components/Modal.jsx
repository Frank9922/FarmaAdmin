import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";


export const Modal = ({title, message, isOpen, onClose}) => {

  return (
    <div>

      {isOpen && (
        <div className=" modal">
          <div className="modalContainer">
            <span className="modalClose" onClick={onClose}>
              &times;
            </span>
            <h2 className="modalTitle">{title}</h2>
            <div className="modalBody">
            
            <p>{message}</p>
              
            </div>

            <div className="flex justify-end gap-1">
              <button className="btn-cancel" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

