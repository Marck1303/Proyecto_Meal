import { Link } from "react-router-dom";

export default function Card({ id, name, category, image }) {
  return (
    <Link to={`/detail/${id}`} className="rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{category}</p>
      </div>
    </Link>
  );
}
