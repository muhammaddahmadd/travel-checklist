import React, { useState } from "react";
import PackingLists from "./components/PackingLists";



function App() {

  return (
  
  <div className="app">
    <Logo/>
    <Form />
    {/* <PackagingList /> */}
    <Footer/>
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
        // <li key={index} id={x.id} className={`${checked? "underline" : ""}`}>
        //   <input type="checkbox" onSelect={handleChecked}/>
        //   {x.itemName} - {x.quantity}
        // </li>

        <Lst name={x.itemName} key={x.id} quantity={x.quantity} id={x.id}/>
      ))}
    </ul>
  );
}

function Lst({name, quantity, id}){
  const [checked, setChecked] = useState(false);
  // const [total, setTotal] = useState('')
 
//   function totalQty(){
//     if(quantity> 0){
//     let sum = quantity.reduce((x,y)=> x+y, 0)
//     setTotal(sum)
// }
//   }

  function handleChecked() {
    setChecked(!checked)
  }
  return <>
    <li className={`${checked ? "underlined" : ""}`}>
      <input type="checkbox" onChange={handleChecked} />
      {name} - {quantity}
    </li>
    <Footer  />
    </>
}


function Footer({packed}) {
  return <footer className="stats">You have {packed} packed items.</footer>
}


export default App;
