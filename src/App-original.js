import React, { useState } from "react";
// import PackingLists from "./components/PackingLists";



function App() {

  return (
  
  <div className="app">
    <Logo/>
    <Form />
    {/* <PackagingList /> */}
    {/* <Footer/> */}
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


function Form() {
  const [items, setItems] = useState([])
  const [num, setNum] = useState("")
  const [name, setName] = useState("")
const code = Date.now()

  function handleQuantity(e){
    setNum(Number(e.target.value))
  }

  function handleName(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setItems([...items, {itemName: name, quantity: num, id: code}])
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
    <PackagingList items={items}/>
  </div>
  
}

function PackagingList({ items }) {

  return (
    <ul className="list">
      {items.map((x, index) => (
    
        <Lst items={items} name={x.itemName} key={x.id} quantity={x.quantity} id={x.id}/>
      ))}
    </ul>
  );
}

function Lst({name, quantity, id, items}){
  const [checked, setChecked] = useState(false);
  const total = items.reduce((total, item) => total + item.quantity, 0);
  // const packedItems = items.filter((item) => item.id !== id || !checked);
  // console.log(packed)
  function handleChecked() {
    setChecked(!checked)
  }
  return <>
    <li className={`${checked ? "underlined" : ""}`}>
      <input type="checkbox" onChange={handleChecked} />
      {name} - {quantity}
    </li>
   <div className="stats">
   <p>   You have {total} total items & you have  item
      </p>
   </div>
    </>
}


// function Footer({total}) {
  // // 
  // console.log(total)
//   return <footer className="stats">
 
// }


export default App;
