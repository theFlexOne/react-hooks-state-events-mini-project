import React from 'react';

function CategoryFilter({ categories, setCurrentCategory, currentCategory }) {
  const onButtonClick = e => {
    if (e.target.type === 'button') {
      setCurrentCategory(e.target.textContent);
    }
  };

  return (
    <div className="categories" onClick={onButtonClick}>
      <h5>Category filters</h5>
      {categories.map((category, i) => {
        return (
          <button
            type="button"
            className={category === currentCategory ? 'selected' : ''}
            key={i}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
