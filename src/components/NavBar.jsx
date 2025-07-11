import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  return (
    <nav className="bg-neutral-900 border-2 border-black shadow-md p-4 flex justify-between items-center">
      <button
        onClick={() => navigate("/")}
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
          {(path.startsWith("/category/") || path.startsWith("/detail/")) && (
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
            <button
              onClick={() => navigate("/category")}
              className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
              Categories
            </button>
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
