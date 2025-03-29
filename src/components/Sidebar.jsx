import {
  UsersIcon,
  ArrowLeftStartOnRectangleIcon,
  ClipboardDocumentCheckIcon,
  ArrowTopRightOnSquareIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/auth/authSlice";

const Sidebar = () => {

  const dispatch = useDispatch();

  const onLogout = () => {

    dispatch(logout());




  }

  return (
    <div className="bg-slate-800 flex-none w-14 lg:w-44 transition-all delay-200 ease-linear">
      <a href="#" className="h-20 mb-4 items-center justify-center flex ">
        <ClipboardDocumentCheckIcon
          width={40}
          className="text-gray-300 hover:text-white transition-colors  sm:fixed "
        />
      </a>
      <div className="fixed left-3 space-y-4">
        <NavLink to="/" className="option">
          <UsersIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Usuarios
          </span>
        </NavLink>
        <NavLink to="/payments" className="option">
          <BanknotesIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Pagos
          </span>
        </NavLink>
        <a
          href="https://www.enfar-medguide.com/compatibilidad"
          className="option"
          target="_blank"
        >
          <ArrowTopRightOnSquareIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8 " />
          <span className="hidden lg:block font-semibold text-white ">
            Vista Usuario
          </span>
        </a>

        {/*  <UsersIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <MailIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        />
        <BellIcon
          width={40}
          className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
        /> */}
      </div>
      <div className="fixed bottom-4 left-3">
        <button
         onClick={onLogout}
         className="option">
          <ArrowLeftStartOnRectangleIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Salir
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
