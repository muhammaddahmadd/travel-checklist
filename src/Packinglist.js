import { useState } from "react";
import Item from "./Item";

function PackingList({ items, handleDel, toggleItem, handleClear }) {
  const [sortby, setSortby] = useState("input");

  let sorted;
  if (sortby === "input") sorted = items;

  if (sortby === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed - b.packed));

  if (sortby === "quantity")
    sorted = items.slice().sort((a, b) => a.quantity - b.quantity);

  return (
    <div className="list">
      <ul className="list">
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDel={handleDel}
            toggleItem={toggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortby(e.target.value)} value={sortby}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
          <option value="quantity">Sort By Quantity</option>
        </select>
        <button onClick={(e) => handleClear(e.target.value)}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
