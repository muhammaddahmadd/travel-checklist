import React, { useState } from "react";



function App() {

  return (
  
  <div className="app">
    <Logo/>
    <Form />
    <PackagingList />
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


  function handleQuantity(e){
    setNum(e.target.value)
  }

  function handleName(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!name.length || isNaN(num)) return 
    setItems([...items, {itemName: name, quantity: num}])
    setNum("")
    setName("")
  }
  // console.log(name,num, items)

  return <>   
    <form className="add-form" onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleQuantity} placeholder="Enter Number" />
      <input type="text" value={name} onChange={handleName} placeholder="Enter Name" />
      <button type="submit">ADD</button>
    </form>
    <PackagingList items={items}/>
  </>
} 


function PackagingList({ items }) {
  console.log(items);
  return (
   <div className="list">
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
   </div>
  );
}

// function List({ name, qty }) {
//   return <li>{name}~{qty}</li>;
// }

function Footer() {
  return <footer>Logo</footer>
}


export default App;
