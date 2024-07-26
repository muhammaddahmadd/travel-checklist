import React, { useState } from "react";



function Forum(){
    const [item, setItem] = useState([]);
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")

    function handleQty(e){
        const value = parseInt(e.target.value)
        if (value > 0 && !isNaN(value) ) return
        setQuantity(value)

    }
    function handleName(e) {
        setName(e.target.value)
    }
    function handleDes(e) {
        setDescription(e.target.value)
    }

    function handleSubmission(e){
        e.preventDefault()
        setItem([...item, {Name: name, QTY: quantity, Detail: description}])
        setName("")
        setDescription("")
        setQuantity("")
    }

console.log(item)

    return (
        <form className="add-form" onSubmit={handleSubmission}>
            <input type="number" value={quantity} placeholder="Enter Quantity" onChange={handleQty}/>
            <input type="text" value={name} placeholder="Enter Name" onChange={handleName} />
            <input type="text" value={description} placeholder="Enter Description" onChange={handleDes} />
            <button type="submit" className="">ADD</button>
        </form>
    )
}


export default Forum;