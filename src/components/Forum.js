import React, { useState } from "react";
import PackingLists from "./PackingLists";



function Forum(){
    const [item, setItem] = useState([]);
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")

    function handleQty(e){
        setQuantity(e.target.value)

    }
    function handleName(e) {
        setName(e.target.value)
    }
    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleSubmission(e){
        e.preventDefault()
        setItem([...item, {name: name, qty: quantity, detail: description}])
        setName("")
        setDescription("")
        setQuantity("")
    }
    

console.log(item)

    return (
        <>
        <form className="add-form" onSubmit={handleSubmission}>
            <input type="number" value={quantity} placeholder="Enter Quantity" onChange={handleQty}/>
            <input type="text" value={name} placeholder="Enter Name" onChange={handleName} />
                <input type="text" value={description} placeholder="Enter Description" onChange={handleDescription} />
            <button type="submit" className="">ADD</button>
        </form>
        <PackingLists items={item} />
        </>
    )
}


export default Forum;