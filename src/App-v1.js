import React from "react";
import Logo from "../src/components/Logo"
import Form from "../src/components/Form"
import PackingLists from "../src/components/PackingLists"
import Footer from "../src/components/Footer"



function App() {
  // const [item, setItems] = useState([])



  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingLists />
      <Footer />
    </div>
  )
}

export default App;
