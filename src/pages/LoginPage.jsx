export const LoginPage = () => {
  return (
    <div class="font-[sans-serif] text-gray-800">
      <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
        <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          <div>
            <a href="javascript:void(0)">
              {/* <img
                src="https://readymadeui.com/readymadeui-white.svg"
                alt="logo"
                class="w-52 mb-12 inline-block"
              /> */}
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
            {/* <p class="text-sm mt-6 text-white">
              Don't have an account{" "}
              <a
                href="javascript:void(0);"
                class="text-white font-semibold underline ml-1"
              >
                Register here
              </a>
            </p> */}
          </div>

          <form className="bg-white text-center rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
            <h3 className="text-3xl font-extrabold mb-12">Iniciar sesión</h3>

            <div>
              <input
                name="email"
                type="email"
                autocomplete="email"
                required
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800 focus:ring-1 focus:ring-indigo-700 transition-colors"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800 focus:ring-1 focus:ring-indigo-700 transition-colors"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="button"
                className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none transition-colors"
              >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
