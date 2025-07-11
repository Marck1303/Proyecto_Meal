import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Pedido() {
  const navigate = useNavigate(); // Hook para la navegación
  const { clearCart, cartItems, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(true); // Abre el modal cuando el usuario confirma
  };

  const handleFinish = () => {
    clearCart(); // Limpia el carrito
    setShowModal(false); // Cierra el modal
    navigate("/home"); // Redirige al home
  };

  return (
    <div className="p-2 md:py-10 bg-[url('/footerAmarillo2.jpg')] bg-cover bg-center h-screen justify-center items-baseline flex dark:bg-[url('/fondovioleta.png')]">
      <div className="p-6 bg-white rounded-3xl w-full md:w-[80%] lg:w-[50%] min-w-[350px] dark:bg-neutral-800">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-purple-700">
          Tu Pedido
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-cyan-500 dark:font-bold">
            No hay productos en tu pedido.
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-3 rounded mb-4 dark:text-cyan-600"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-2xl">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 bg-gray-300 rounded dark:bg-purple-900 dark:hover:bg-purple-950 dark:hover:text-cyan-500 dark:hover:drop-shadow-[0_0_2px_rgba(103,232,249,0.7)] dark:active:bg-purple-700"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 bg-gray-300 rounded dark:bg-purple-900 dark:hover:bg-purple-950 dark:hover:text-cyan-500 dark:hover:drop-shadow-[0_0_2px_rgba(103,232,249,0.7)] dark:active:bg-purple-700"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-bold dark:text-purple-800"
                >
                  X
                </button>
              </div>
            ))}
            <div className="w-full justify-center flex items-center text-center">
              <button
                onClick={handleConfirm}
                className="bg-neutral-900 text-white px-4 py-2 rounded-xl hover:bg-orange-500 mt-4  w-[50%] dark:bg-cyan-900 dark:hover:bg-cyan-950 dark:text-white dark:font-semibold"
              >
                Confirmar Pedido
              </button>
            </div>
          </>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-[url('/footerAmarillo2.jpg')] dark:bg-[url('/fondovioleta.png')]">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-center dark:bg-neutral-800 dark:text-gray-400">
                <h3 className="text-xl font-bold mb-4">
                  ¡Tu pedido está siendo preparado!
                </h3>
                <ul className="text-left px-4">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.quantity} x {item.name}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleFinish} // Limpiar carrito y redirigir
                  className="mt-4 bg-neutral-900 text-white px-4 py-2 rounded-2xl hover:bg-black hover:drop-shadow-[0_0_10px_rgb(15,9,19)] dark:bg-cyan-900 dark:hover:bg-cyan-950"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
