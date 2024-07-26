import React from "react";
import Logo from "../src/components/Logo"
import Form from "../src/components/Form"
import PackingLists from "../src/components/PackingLists"
import Footer from "../src/components/Footer"
import Forum from "./components/Forum";



function App() {
  // const [item, setItems] = useState([])



  return (
    <div className="app">
      <Logo />
      {/* <Form /> */}
      <Forum />
      {/* <PackingLists /> */}
      <Footer />
    </div>
  )
}

export default App;
