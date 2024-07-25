import React, { useState } from "react";

function Items({ items, id }) {
    const [checked, setChecked] = useState({})
    console.log(items); // Just an example of using props inside the component

    function handleChecked(id){
        setChecked([{ ...checked, [id]: !checked[id] }])
    }
    console.log(id)


    function handleDel(){}
    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={()=>handleChecked(id)}
            />
            {items.Quantity} - {items.Item}
            <button className="close-icon" onClick={handleDel}>X</button>
        </li>
    );
}

export default Items;
