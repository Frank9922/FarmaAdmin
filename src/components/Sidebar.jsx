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
    // celular
    // pantallas grandes
    <div className="bg-slate-800 flex-none w-44">
      <div className="h-20 items-center justify-center flex ">
        <ClipboardDocumentCheckIcon
          width={40}
          className="text-gray-300 hover:text-white transition-colors  sm:fixed "
        />
      </div>

      <div className="fixed left-3 space-y-4 sm:left-6 top-[100px]">
        <div className=" lg:space-x-2 flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-500 transition-colors">
          <ChartBarIcon
            width={35}
            className="bg-gray-600 p-2  rounded-lg text-gray-300"
          />
          <span className="font-semibold text-white">Dashboard</span>
        </div>
        <div className=" space-x-2 flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-500 transition-colors">
          <UsersIcon
            width={35}
            className="bg-gray-600 p-2  rounded-lg text-gray-300"
          />
          <span className="font-semibold text-white">Usuarios</span>
        </div>
        <div className=" space-x-2 flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-500 transition-colors">
          <EnvelopeIcon
            width={35}
            className="bg-gray-600 p-2  rounded-lg text-gray-300"
          />
          <span className="font-semibold text-white">Correo</span>
        </div>

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
      <div className="fixed bottom-4 left-3 sm:left-6">
        {/* <a href="#top">
          <ArrowUpIcon
            width={40}
            className="bg-gray-600 p-2 rounded-lg mb-4 text-gray-300"
          />
        </a> */}
        <div className=" space-x-2 flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-500 transition-colors">
          <ArrowLeftStartOnRectangleIcon
            width={35}
            className="bg-gray-600 p-2 rounded-lg text-gray-300"
          />
          <span className="font-semibold text-white">Salir</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
