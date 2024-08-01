import React, { useState } from "react";

function Items({ items, id }) {
    const [checked, setChecked] = useState({})
    const [deleted, setDeleted] = useState(items);
    console.log(items); 

    function handleChecked(id){
        setChecked([{ ...checked, [id]: !checked[id] }])
    }
    console.log(id)


    function handleDel(){
        // setDeleted(items.filter(item=> item.))
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={()=>handleChecked(id)}
            />
            {items.qty} - {items.Name}({items.Detail})
            <button className="close-icon" onClick={handleDel}>X</button>
        </li>
    );
}

export default Items;
