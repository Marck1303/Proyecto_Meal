import { Link } from "react-router-dom";
import React from "react";

export default function Card({ id, name, category, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 mb-4">{category}</p>
        <Link to={`/detail/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
}
