import React from "react";

function Footer({ items }) {
  if (items.length === 0) return <p className="stats">Start adding items 🛒</p>;
  const itemLength = items.length;
  const count = items.reduce((acc, curr) => acc + curr.packed, 0);
  const percentage = Math.round((count / itemLength) * 100);
  return (
    <footer className="stats">
      <h3>
        {percentage === 100
          ? "You have Packed Everything!!"
          : `You have ${itemLength} items on your list, and you already packed ${count} item  percentage ${percentage}%`}
      </h3>
    </footer>
  );
}
export default Footer;
