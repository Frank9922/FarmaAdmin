import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Modal } from "../components/Modal";
import { useLoginMutation } from "../store/api/adminApi";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth/authSlice";


const initialForm = {
  email: "",
  password: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length > 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};
export const LoginPage = () => {

  const [loginMutation, { isLoading : isLoadingCreateUser, isError, isSuccess}] = useLoginMutation();
  const dispatch = useDispatch()
  

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {
    email,
    emailValid,
    password,
    passwordValid,
    formState,
    isFormValid,
    onInputChange,
  } = useForm(initialForm, formValidation);


  const onSubmit = async(event) => {

    event.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    try {

      const { token, user } = await loginMutation(formState).unwrap()

      const fulltoken= token.replaceAll('"', '')

      console.log(fulltoken)

      localStorage.setItem("token", fulltoken);

      dispatch(login(user))
      

    } catch(error) {


    }


  }

  return (
    <div className="font-[sans-serif] text-gray-800">
      <div className="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <a href="">
              {/* Logo */}
              <h1 className="inline-block w-52 mb-12 text-4xl font-extrabold lg:leading-[50px] text-white">
                Enfar-Med Guide
              </h1>
            </a>
            <h2 className="text-3xl font-extrabold lg:leading-[50px] text-white">
              Acceso exclusivo para la administracion
            </h2>
            <p className="text-sm mt-6 text-white">
              Ingresa tus credenciales y accede de manera segura
            </p>
          </div>

          <form
            onSubmit={onSubmit}
           className="bg-white text-center rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
            <h3 className="text-3xl font-extrabold mb-12">Iniciar sesión</h3>

{/* 
            <div className="bg-red-100 text-red-600 py-2 px-4 rounded-md text-sm border border-red-400">
              Credenciales incorrectas. Inténtalo de nuevo.
            </div> */}

            <div>
              <input
                name="email"
                type="email"
                value={email}
                onChange={onInputChange}
                autoComplete="email"
                className={`bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800 transition-colors
                  ${!!emailValid && formSubmitted ? "focus:ring-1 focus:ring-red-500 border-red-500" : "focus:ring-1 focus:ring-indigo-700"}`}
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                value={password}
                onChange={onInputChange}
                autoComplete="current-password"
                className={`bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800 transition-colors
                  ${!!passwordValid && formSubmitted ? "focus:ring-1 focus:ring-red-500 border-red-500" : "focus:ring-1 focus:ring-indigo-700"}`}
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none transition-colors"
              >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal 
      title='Credenciales incorrectas' 
      message='Intentelo de nuevo.'
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      />
    </div>
  );
};
