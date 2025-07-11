import { Link } from "react-router-dom";

export default function CategoryCard({ name, image }) {
  return (
    <Link
      to={`/category/${name}`}
      className="bg-amber-800 relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(400,50,0,0.7)] dark:bg-purple-950 dark:hover:drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]"
    >
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-5xl font-bold text-shadow-2xs dark:text-cyan-500">
          {name}
        </h3>
      </div>
    </Link>
  );
}
