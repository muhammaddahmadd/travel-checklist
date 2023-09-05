import React from "react";
// import Item from "./Packinglist";
// import Packinglist from "./Packinglist";

function Item({ item, handleDel, toggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)}
      />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="close-button ">
        <span className="close-icon" onClick={() => handleDel(item.id)}>
          x
        </span>
      </button>
    </li>
  );
}

export default Item;
