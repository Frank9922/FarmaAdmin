import React from "react";
import {
  ChartBarIcon,
  EnvelopeIcon,
  UsersIcon,
  ArrowLeftStartOnRectangleIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

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
        <a href="#" className="option active">
          <ChartBarIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8 active" />
          <span className="hidden lg:block font-semibold text-white">
            Dashboard
          </span>
        </a>
        <a href="#" className="option">
          <UsersIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Usuarios
          </span>
        </a>
        <a href="#" className="option">
          <EnvelopeIcon className="p-2 w-10 rounded-lg text-gray-300 lg:w-8" />
          <span className="hidden lg:block font-semibold text-white">
            Correo
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
