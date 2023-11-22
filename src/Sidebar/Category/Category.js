import React, { useState } from 'react';
import CustomCard from '../../components/Card';


const categories = ['Todas', 'Software', 'Hardware', 'Big Data', 'Retail', 'Inteligencia Artificial'];

function FilteringComponent() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCards = (cards) => {
    if (selectedCategory === 'Todas') {
      return cards;
    }

    return cards.filter((card) => card.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  };

  return (
    <div className="filtering-container">
      <div className="filter-dropdown">
        <label>Filtrar por categoría:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilteringComponent;
