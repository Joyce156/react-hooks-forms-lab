import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    onSearchChange(newValue); // Notify parent component of the search term
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search} // Use the `search` prop directly
        onChange={handleSearchChange} // Notify parent on input change
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
