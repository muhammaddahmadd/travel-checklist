import React, { useState } from "react";



function Items({ item, key }) {
    // const { item.name, item.qunatity } = {qunatity}
    const [checked, setChecked] = useState(false);

    function handleChecked() {
        setChecked(!checked);
        console.log("item box is checked")
    }


    return (
        <li className={`${checked ? "checked" : ""}`}> <input type="checkbox" id={key} name="checkbox" onSelect={handleChecked} />{item.Item}- {item.Quantity}</li>
    )
}

export default Items;