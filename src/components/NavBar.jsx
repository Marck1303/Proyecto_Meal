// components/NavBar.jsx
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <nav className="bg-neutral-900 border-2 border-black shadow-md p-4 flex justify-between items-center">
      <img src="/LogoRed.png" alt="logored" className="size-15" />
      <div className="flex gap-2">
        <div className="flex gap-2">
          {(path.startsWith("/category/") || path.startsWith("/detail/") || path === "/reseñas") && (
            <button
              onClick={() => navigate("/home")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
              Home
            </button>
          )}
          {path.startsWith("/category/") && (
            <button
              onClick={() => navigate("/category")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {path === "/category" && (
            <button
              onClick={() => navigate("/home")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
        </div>

        {/* Botones a la derecha */}
        <div className="flex gap-2">
          {(path === "/home" || path.startsWith("/detail/")) && (
            <>
              <button
                onClick={() => navigate("/category")}
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
              >
                Categories
              </button>
              <button
                onClick={() => navigate("/reseñas")}
                className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
              >
                Reseñas
              </button>
            </>
          )}
          {path.startsWith("/detail/") && (
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}