
import { useEffect, useState } from 'react';
import fetchMealData from '../../hook/data'; 
import CategoryCard from './CategoryCard';

export default function CategoryCardsContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchMealData('categories.php');
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.idCategory}
          name={category.strCategory}
          image={category.strCategoryThumb}
        />
      ))}
    </div>
  );
}