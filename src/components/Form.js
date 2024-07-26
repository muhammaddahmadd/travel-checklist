import React, { useState } from "react";
import Items from "./Items"
import PackingLists from "./PackingLists";

function Form() {
    const [item, setItem] = useState([])
    const [qty, setQty] = useState("");
    const [name, setName] = useState("");


    function Quantity(e) {
        const value = parseInt(e.target.value);
        if (value > 0 && !isNaN(value)) {
            setQty(value)
        }
        else return
    }

    function ItemName(e) {
      
        setName(e.target.value)
        
    }

    function Submission(e) {
        e.preventDefault()
        setItem([...item, { Item: name, Quantity: qty }])
        setQty(0)
        setName("")
    }

    // console.log(qty, name)

    return (
        <div>
            <>
                <form onSubmit={Submission} className="add-form">
                    <label>Quantity: </label>
                    <input type="number" value={qty === 0? "" : qty} placeholder="Enter Quantity" onChange={Quantity} required />

                    {/* <select> 
                        {Array.from({ length: 20 }, (_, i)=> i +1).map((num) => (
                            <option value={num} key={num}></option>
                        ))}
                    </select> */}
                    <label>Item Name: </label>
                    <input type="text" value={name} placeholder="Enter Item" onChange={ItemName} required />
                    <button type="submit">Add</button>
                </form>

        
                     <PackingLists items={item}  />
          
            </>
        </div>
    )
}


export default Form;