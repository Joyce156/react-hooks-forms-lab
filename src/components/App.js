import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to add new item to the shopping list
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  // Toggle Dark Mode
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* Passing down items and handleItemFormSubmit */}
      <ShoppingList items={items} onItemFormSubmit={handleItemFormSubmit} />
    </div>
  );
}

export default App;
