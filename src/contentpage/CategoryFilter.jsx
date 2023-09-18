import React, { useEffect } from "react";

import "./category.css";

const LS_KEY_CATEGORY = "LS_KEY_CATEGORY";

const CategoryFilter = ({ categories, category, setCategory }) => {
  const makeCategories = () => {
    if (categories.length === 0) return;

    return categories.map((item, idx) => (
      <div
        key={idx}
        className={
          item.value === category ? "category-child selected" : "category-child"
        }
        onClick={() => {
          setCategory(item.value);
          localStorage.setItem(LS_KEY_CATEGORY, item.value);
        }}
      >
        {item.name}
      </div>
    ));
  };

  const init = () => {
    let data = localStorage.getItem(LS_KEY_CATEGORY);
    if (data !== null) setCategory(data);
  };

  useEffect(init, []);

  return (
    <div>
      <div className="category-set">{makeCategories()}</div>
    </div>
  );
};

export default CategoryFilter;