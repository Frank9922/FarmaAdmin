import {
  ChartBarIcon,
  EnvelopeIcon,
  UsersIcon,
  ArrowLeftStartOnRectangleIcon,
  ClipboardDocumentCheckIcon,
  ArrowUpTrayIcon,
  ArrowTopRightOnSquareIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
        <a className="option">
          <ArrowLeftStartOnRectangleIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Salir
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
