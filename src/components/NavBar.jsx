import { useLocation, useNavigate } from "react-router-dom";
import CartButton from "./CartButton";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const from = location.state?.from;

  return (
    <nav className="sticky top-0 z-40 w-full bg-neutral-900 border-2 border-black shadow-md p-4 flex justify-between items-center dark:bg-[rgb(32,17,43)]">
      <button
        onClick={() => navigate("/home")}
        className="p-0 m-0 border-none bg-transparent"
      >
        <img
          src="/buttonCF2.png"
          alt="logoCF"
          className="size-18 cursor-pointer ml-4"
        />
      </button>
      <div className="flex gap-2">
        <div className="flex gap-2">
          {!(path === "/" || path === "/pedido") && <CartButton />}
          {path.startsWith("/rese") && (
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}

          {(path.startsWith("/category/") || path.startsWith("/detail/")) && (
            <button
              onClick={() => navigate("/home")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
            >
              Home
            </button>
          )}

          {path.startsWith("/category/") && (
            <button
              onClick={() => navigate("/category")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}

          {path === "/category" && (
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}

          {path === "/pedido" && from !== "/home" && (
            <button
              onClick={() => navigate("/home")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
            >
              Home
            </button>
          )}

          {path === "/pedido" && from !== "/category" && (
            <button
              onClick={() => navigate("/category")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
            >
              Categories
            </button>
          )}
          {path === "/pedido" && (
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}

          {path === "/reseñas" && (
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}
        </div>

        <div className="flex gap-2">
          {(path === "/home" || path.startsWith("/detail/")) && (
            <>
              <button
                onClick={() => navigate("/category")}
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
              >
                Categories
              </button>
              <button
                onClick={() => navigate("/reseñas")}
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
              >
                Reseñas
              </button>
            </>
          )}
          {path.startsWith("/detail/") && (
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 dark:bg-cyan-800 dark:hover:bg-cyan-950"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
