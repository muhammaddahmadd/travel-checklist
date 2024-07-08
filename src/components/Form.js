import React, { useState } from "react";
import Items from "./Items"

function Form() {
    const [item, setItem] = useState([])
    const [qty, setQty] = useState(0);
    const [name, setName] = useState("");


    function Quantity(e) {
        setQty(e.target.value)
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
                <form onSubmit={Submission}>
                    <label>Quantity: </label>
                    <input type="number" value={qty} placeholder="Enter Quantity" onChange={Quantity} required />
                    <label>Item Name: </label>
                    <input type="text" value={name} placeholder="Enter Item" onChange={ItemName} required />
                    <button type="submit">Add</button>
                </form>

                {
                    item.map((item, index) => (
                        <Items item={item} key={index} />
                    )
                    )}
            </>
        </div>
    )
}


export default Form;