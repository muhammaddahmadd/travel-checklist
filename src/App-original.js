import React, { useState } from "react";



function App() {
  const [items, setItem] = useState([])
  const [num, setNum] = useState("");
  const [name, setName] = useState("")
  const totalItems = Number(items.reduce((x, y) => x + y.num, 0))
console.log(totalItems)
  function handleSubmission(e) {
    e.preventDefault()
    setItem([...items, { name: name, num: num, id: Date.now() }])
    setName("")
    setNum("")
  }

  function handleNum(e) {
    setNum(e.target.value)

  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleDel(id){
    // console.log(id)
    setItem(items=>items.filter(item=>item.id !== id))
  }
  return (
  <div className="app">
    <Logo/>
      <Form onSubmit={handleSubmission} name={name} num={num} onAddNum={handleNum} onAddName={handleName} />
    <PackagingList items={items} onDel={handleDel}/>
    <Footer total={totalItems}/>
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


function Form({ onSubmit, onAddName, onAddNum, num, name}) {
  return <form className="add-form" onSubmit={onSubmit}>

    <input type="number" placeholder="Enter Number" value={num} onChange={onAddNum} />
    <input type="text" placeholder="Enter Name" value={name} onChange={onAddName} />
    <button type="submit">Add</button>
  </form>
} 


function PackagingList({items, onDel}) {

  return (
    <ul className="list">
      {items.map((item) => (
        <List name={item.name} onDel={onDel} key={item.id} id={item.id} num={item.num}/>
      ))}
    </ul>
  )
} 


function List({name, num, onDel,id}) {



  return <li className="">
    <span>
      <input type="checkbox" />
      {num} - {name}
    </span>
    <button className="close-button" onClick={()=>onDel(id)}>X</button>
  </li>
}



function Footer() {
  return <footer className="stats">Total number of items: ${""} </footer>
}


export default App;
