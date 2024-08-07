import React, { useState } from "react";



function Items({ item }) {
    // const { item.name, item.qunatity } = {qunatity}
    const [checked, setChecked] = useState(false);
    console.log(item.key)
    function handleChecked() {
        setChecked(!checked);
        console.log("item box is checked")

    }



    return (
        <li className={`${checked ? "checked" : ""}`}>
            <input
                type="checkbox"
                id={item.id}
                name="checkbox"
                checked={checked}
                onChange={handleChecked}
            />
            {item.Item} - {item.Quantity}
        </li>
    )
}

export default Items;