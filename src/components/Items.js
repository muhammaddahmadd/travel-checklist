import React from "react";



function Items({ item }) {
    // const { item.name, item.qunatity } = {qunatity}
    return (
        <li >{item.Item}- {item.Quantity}</li>
    )
}

export default Items;