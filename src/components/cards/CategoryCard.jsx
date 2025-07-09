
import { Link } from 'react-router-dom';

export default function CategoryCard({ name, image }) {
  return (
    <Link to={`/category/${name}`} className="relative rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        
      />
      <div className="absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{name}</h3>
      </div>
    </Link>
  );
}