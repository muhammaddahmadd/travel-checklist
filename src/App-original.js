import React, { useState } from "react";



function App() {
  const [items, setItem] = useState([])
  const [num, setNum] = useState("");
  const [name, setName] = useState("")
  const [packed, setPacked] = useState(false)

  function itemPacked(id) {
    console.log(id)
    setPacked(packed => {
      const newPacked = !packed;
      setItem(items =>
        items.map(item =>
          item.id === id ? { ...item, packed: newPacked } : item
        )
      );
      return newPacked;
    }) 
     
  }
console.log(items)

  const totalItems = Number(items.reduce((x, y) => x + y.num, 0))
  const packeditems = items.filter(item=> item.packed? item.packed :"")
  console.log(packeditems)
  const totalPackedItems = items.reduce((total, item) => {
    return item.packed ? total + item.num : total;
  }, 0);
  // const checking = items.map((item)=> item.packed? item.num: "")
  // const totalPackedItems =checking.reduce((a,b)=> a + b.num,0)
  // console.log(totalPackedItems)

function handleSubmission(e) {
    e.preventDefault()
    setItem([...items, { name: name, num: num, id: Date.now() }])
    setName("")
    setNum("")
  }

  function handleNum(e) {
    setNum(Number(e.target.value))

  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleDel(id){
    setItem(items=>items.filter(item=>item.id !== id))
  }
  function handleToggle(id) {
    setItem(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: packed} : item
      )
    );
    console.log(id)
  }



  return (
  <div className="app">
    <Logo/>
      <Form onSubmit={handleSubmission} name={name} num={num} onAddNum={handleNum} onAddName={handleName} />
      <PackagingList items={items} packed={packed} onDel={handleDel} onToggleItem={handleToggle} onTgl={itemPacked}/>
      <Footer total={totalItems} totalPackedItems={totalPackedItems}/>
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


function PackagingList({ items, onDel, onToggleItem, onTgl, packed }) {

  return (
    <ul className="list">
      {items.map((item) => (
        <List name={item.name} onTgl={onTgl} packed={packed} item={item} onToggleItem={onToggleItem} onDel={onDel} key={item.id} id={item.id} num={item.num}/>
      ))}
    </ul>
  )
} 


function List({ item, name, num, onDel, onToggleItem, id, onTgl, packed }) {



  return <li className="">
    <span>
      <input type="checkbox" value={packed} onChange={() => onTgl(id)}/>
      {num} - {name}
    </span>
    <button className="close-button" onClick={()=>onDel(id)}>X</button>
  </li>
}



function Footer({ total, totalPackedItems }) {
  console.log(totalPackedItems)
  return <footer className="stats">
    {total > 0 ? `You have total ${total} items and  you have packed ${totalPackedItems} items` : "Please start adding items"}
     </footer>
}


export default App;
