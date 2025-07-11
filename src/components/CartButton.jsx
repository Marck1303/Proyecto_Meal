import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function CartButton() {
  const location = useLocation();
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() =>
        navigate("/pedido", { state: { from: location.pathname } })
      }
      className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 dark:bg-cyan-300 dark:hover:bg-cyan-500 dark:text-black dark:font-semibold"
    >
      Ver pedido ({total})
    </button>
  );
}
