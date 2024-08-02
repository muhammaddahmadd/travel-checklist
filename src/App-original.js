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
    <h1>Logo
    </h1>
    </header>
}


function Form() {
  const [num, setNum] = useState("")
  const [name, setName] = useState("")
  const [item, setItem] = useState([])
  return <form className="add-form">

    <input type="number" value={num}/>
    <input type="text" value={name}/>
  </form>
} 


function PackagingList() {
  return <header>Logo</header>
} 


function List() {
  return <header>Logo</header>
}



function Footer() {
  return <footer>Logo</footer>
}


export default App;
