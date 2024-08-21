import React, { useState } from "react";

function App() {
  const [items, setItem] = useState([]);
  const [num, setNum] = useState("");
  const [name, setName] = useState("");

  function itemPacked(id) {
    setItem(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const totalItems = items.reduce((x, y) => x + Number(y.num), 0);
  const totalPackedItems = items.reduce((total, item) => {
    return item.packed ? total + Number(item.num) : total;
  }, 0);

  function handleSubmission(e) {
    e.preventDefault();
  
const existingItem = items.some(item=>item.name.toLowerCase() === name.toLowerCase() );
if (existingItem) {
  alert("Item already exists");
} else if(!name.length) return
else  {
  setItem([...items, { name: name, num: Number(num), id: Date.now(), packed: false }]);
}
    setName("");
    setNum("");
  }

  function handleNum(e) {
    setNum(e.target.value);
  }

  function handleName(e) {
    // if(items.name.includes(e.target.value)) return
    setName(e.target.value);
  }

  function handleDel(id) {
    setItem(items => items.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onSubmit={handleSubmission} name={name} num={num} onAddNum={handleNum} onAddName={handleName} />
      <PackagingList items={items} onDel={handleDel} onToggleItem={itemPacked} />
      <Footer total={totalItems} totalPackedItems={totalPackedItems} />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <h1>CheckList</h1>
    </header>
  );
}

function Form({ onSubmit, onAddName, onAddNum, num, name }) {
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input type="number" placeholder="Enter Number" value={num} onChange={onAddNum} />
      <input type="text" placeholder="Enter Name" value={name} onChange={onAddName} />
      <button type="submit">Add</button>
    </form>
  );
}

function PackagingList({ items, onDel, onToggleItem }) {
  return (
    <ul className="list">
      {items.map(item => (
        <List
          name={item.name}
          packed={item.packed}
          item={item}
          onToggleItem={onToggleItem}
          onDel={onDel}
          key={item.id}
          id={item.id}
          num={item.num}
        />
      ))}
    </ul>
  );
}

function List({ item, name, num, onDel, onToggleItem, id, packed }) {
  return (
    <li className="">
      <span>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onToggleItem(id)}
        />
        {num} - {name}
      </span>
      <button className="close-button" onClick={() => onDel(id)}>
        X
      </button>
    </li>
  );
}

function Footer({ total, totalPackedItems }) {
  return (
    <footer className="stats">
      {total > 0
        ? `You have a total of ${total} items and you have packed ${totalPackedItems} items`
        : "Please start adding items"}
    </footer>
  );
}

export default App;
