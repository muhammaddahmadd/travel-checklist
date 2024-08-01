import React, { useState } from "react";
import PackingLists from "./PackingLists";



function Forum(){
    const [item, setItem] = useState([]);
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState("")

    function handleQty(e){
        setQuantity(e.target.value)

    }
    function handleName(e) {
        setName(e.target.value)
    }
    function handleDes(e) {
        setDescription(e.target.value)
    }

    function handleSubmission(e){
        e.preventDefault()
        setItem([...item, {Name: name, qty: quantity, Detail: description}])
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
            <input type="text" value={description} placeholder="Enter Description" onChange={handleDes} />
            <button type="submit" className="">ADD</button>
        </form>
        <PackingLists items={item} />
        </>
    )
}


export default Forum;