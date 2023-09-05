import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Footer from "./Footer";
import PackingList from "./Packinglist";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems(() => [...items, item]);
  }

  function handleDel(id) {
    setItems(() => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear(e) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        handleDel={handleDel}
        toggleItem={toggleItem}
        handleClear={handleClear}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
