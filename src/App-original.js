import React, { useState } from "react";
// import PackingLists from "./components/PackingLists";



function App() {
  const [items, setItems] = useState([])
  function handleItems(item) {
    setItems(items => [...items, item])
  }
  return (
  
  <div className="app">
    <Logo/>
    <Form  items={items} onAddItems={handleItems}/>
    <PackagingList  items={items}/>
    <Footer items={items}/>
  </div>
  )
}

function Logo(){
  return <header>
    <h1>
      CheckList
    </h1>
    </header>
}


function Form({ items, onAddItems }) {
  const [name, setName] = useState("")
  const [num, setNum] = useState("")

const code = Date.now()

  function handleQuantity(e){
    setNum(Number(e.target.value))
  }

  function handleName(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    // setItems([...items, {itemName: name, quantity: num, id: code}])
    const item = { itemName: name, quantity: num, id: code }
    onAddItems(item)
    setNum("")
    setName("")
  }
console.log(items)
  return <div>   
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleQuantity} placeholder="Enter Number" />
      <input type="text" value={name} onChange={handleName} placeholder="Enter Name" />
      <button type="submit" >ADD</button>
    </form>
   
  </div>
  
}

function PackagingList({ items }) {

  return (
    <ul className="list">
      {items.map((x) => (
        <Lst items={items} name={x.itemName} key={x.id} quantity={x.quantity} id={x.id}/>
      ))}
    </ul>
  );
}

function Lst({name, quantity, id}){
  const [checked, setChecked] = useState([]);
  function handleChecked(id) {
    setChecked(checked=> [...checked, id])
  }
console.log(checked)
  return <>
    <li className={`${checked ? "underlined" : ""}`}>
      <input type="checkbox" onChange={()=>handleChecked(id)} />
      {name} - {quantity} ~ {id}
    </li>
  
    </>
}


function Footer({items}) {
  const total = items.reduce((total, item) => total + item.quantity, 0);

  return <footer className="stats">
    <p>   You have {total} total items & you have packed item.
    </p>
  </footer>
}


export default App;
