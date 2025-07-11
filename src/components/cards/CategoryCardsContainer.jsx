import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryCardsContainer({ categories }) {
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
