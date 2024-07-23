import React, { useState } from "react";

function Items({ items }) {
    const [checked, setChecked] = useState(false)
    console.log(items); // Just an example of using props inside the component

    function handlechecked(){
        setChecked(!checked)
    }

    return (
    <li>
        <input type="checkbox" checked={checked} onChange={handlechecked} />
        {items.Quantity} - {items.Item}
            <button className="close-icon">X</button>
    </li>
    );
}

export default Items;
