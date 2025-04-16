import { useState } from "react";
import Select from "react-select";
import {
  useCreatePaymentMutation,
  useGetUsersQuery,
} from "../store/api/adminApi";
import { useForm } from "../hooks/useForm";

const initialForm = {
  subscription_id: "",
  amount: "",
  payment_method: "",
};

const formValidation = {
  subscription_id: [
    (value) => Number.isInteger(Number(value)),
    "El usuario debe ser valido.",
  ],
  amount: [(value) => value.length > 1, "El monto debe ser un numero positivo"],
  payment_method: [
    (value) => value.length > 1,
    "El metodo de pago debe ser valido",
  ],
};

const ModalPayments = () => {
  const [
    registerPayment,
    {
      isLoading: isLoadingPayment,
      isError: isErrorPayment,
      isSuccess: isSuccessPayment,
    },
  ] = useCreatePaymentMutation();

  const {
    subscription_id,
    subscription_idValid,
    amount,
    amountValid,
    payment_method,
    payment_methodValid,
    onInputChange,
    formState,
    isFormValid,
    setFormState,
  } = useForm(initialForm);

  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, isSuccess } = useGetUsersQuery();
  const [selectedUser, setSelectedUser] = useState("");

  const handleSelectChange = (e) => {
    setSelectedUser(e);

    setFormState((prevState) => ({
      ...prevState,
      subscription_id: e.value,
    }));
  };

  const onSubmit = async () => {
    await registerPayment(formState).unwrap();

    setIsOpen(false);
  };

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
                  Usuario
                </label>
                <Select
                  options={[
                    { value: "", label: "Selecciona una opcion" },
                    ...data.map((user) => ({
                      value: user.subscription.id,
                      label: user.name,
                    })),
                  ]}
                  value={selectedUser}
                  onChange={handleSelectChange}
                  className="input"
                  name="subscription_id"
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
                  name="payment_method"
                  onChange={onInputChange}
                  value={payment_method}
                  id="type"
                >
                  <option value=""> Selecciona una opcion</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="transferencia">Tranferencia</option>
                </select>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="amount"
                  className="block font-medium text-gray-900 mb-1"
                >
                  Monto (pesos)
                </label>
                <input
                  className="w-full text-base rounded focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-purple-600"
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={onInputChange}
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
              <button
                onClick={onSubmit}
                className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-700"
              >
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
