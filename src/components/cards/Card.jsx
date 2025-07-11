import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Card({ id, name, category, image }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-white rounded-xl cursor-pointer overflow-hidden  hover:drop-shadow-[0_0_15px_rgba(400,50,0,0.7)] p-4 border-2 border-amber-600 dark:bg-violet-950 dark:hover:drop-shadow-[0_0_15px_rgba(103,232,249,0.7)] dark:border-purple-700">
      <h2 className="text-xl font-bold text-center p-2 border-t border-b mb-2 dark:text-cyan-300">
        {name}
      </h2>
      <img
        src={image}
        alt={name}
        className="w-full rounded-2xl border border-gray-300"
      />
      <div className="p-4 text-center">
        <p className="text-gray-500 mb-4 dark:text-gray-300">{category}</p>
        <div className="flex justify-between px-5">
          <Link to={`/detail/${id}`}>
            <button
              className="bg-neutral-700 dark:bg-cyan-800 dark:hover:bg-cyan-950 text-white px-4 py-2 rounded hover:bg-neutral-900 hover:shadow-lg 
  hover:scale-105 
  transition 
  duration-200 
  ease-in-out 
  focus:outline-none 
  active:scale-95 
  active:ring-2 
  active:ring-orange-800
  "
            >
              Receta
            </button>
          </Link>
          <button
            onClick={() => addToCart({ id, name, image })}
            className="bg-orange-500 dark:bg-cyan-300 dark:text-black dark:font-semibold dark:hover:bg-cyan-500 text-white px-4 py-2 rounded 
  hover:bg-orange-700 
  hover:shadow-lg 
  hover:scale-105 
  transition 
  duration-200 
  ease-in-out 
  focus:outline-none 
  active:scale-95 
  active:ring-2 
  active:ring-orange-300"
          >
            Add order
          </button>
        </div>
      </div>
    </div>
  );
}
