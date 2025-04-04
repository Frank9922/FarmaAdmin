import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useGetProfesionQuery, useUpdateUserMutation } from "../store/api/adminApi";


const formValidation = {
  name: [(value) => value.length > 3, "El nombre debe ser mayor a 3 caracteres"],
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  profesion_id: [(value) => Number.isInteger(Number(value)), "La profesion debe ser valida."],
  rol: [(value) => value.length > 3, "El nombre debe ser mayor a 3 caracteres"],
}

const ModalEdit = ({ user }) => {

  const userId = user.id;

  const { data : profesions, error, isLoading } = useGetProfesionQuery();
  const [editUser, { isLoading : isLoadingUpdate, isError, isSuccess }] = useUpdateUserMutation();
 
  const initialForm = useMemo(() => ({
    name: user.name,
    email: user.email,
    profesion_id: user.profesion.id,
    rol: user.rol,
  }), [user])


  const {name, nameValid, email, emailValid, profesion_id, profesion_idValid, rol, rolValid, onInputChange, formState, isFormValid} = useForm(initialForm, formValidation);

  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onSubmit = async( ) => {

    await editUser({userId, 
      updateUser: {name: formState.name, email: formState.email, rol: formState.rol, profesion_id: formState.profesion_id}}).unwrap();

    setIsOpen(false);
  }

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
                  value={name}
                  onChange={onInputChange}
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
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div className="cont-input">
              <label htmlFor="profesion" className="label-input">
                Profesión
              </label>
              <select
                className="input"
                name="profesion_id"
                id="profesion_id"
                onChange={onInputChange}
                defaultValue={profesion_id}
              >
                <option value="" disabled>Seleccione una profesión</option>
                {isLoading && <option>Cargando...</option>}
                {error && <option>Error al cargar profesiones</option>}
                {profesions && 
                  profesions?.profesions.map((profesion) => (
                    <option key={profesion.id} value={profesion.id}>
                      {profesion.name}
                    </option>
                  ))}
              </select>
            </div>;

              <div className="cont-input">
                <label htmlFor="rol" className="label-input">
                  Tipo usuario
                </label>
                <select
                  className="input"
                  name="rol"
                  id="rol"
                  value={rol}
                  onChange={onInputChange}
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
              <button className="btn-save" onClick={onSubmit}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalEdit;
