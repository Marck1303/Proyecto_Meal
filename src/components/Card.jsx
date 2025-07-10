import { Link } from "react-router-dom";
import React from "react";

export default function Card({ id, name, category, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 border-2 border-amber-600">
      <h2 className="text-xl font-bold text-center p-2 border-t border-b mb-2">
        {name}
      </h2>
      <img
        src={image}
        alt={name}
        className="w-full rounded-2xl border border-gray-300"
      />
      <div className="p-4">
        <p className="text-gray-500 mb-4">{category}</p>
        <Link to={`/detail/${id}`}>
          <button className="bg-neutral-700 text-white px-4 py-2 rounded hover:bg-neutral-900">
            Receta
          </button>
        </Link>
      </div>
    </div>
  );
}
