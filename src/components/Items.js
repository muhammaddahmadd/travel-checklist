import React from "react";

function Items({ items }) {
    console.log(items); // Just an example of using props inside the component

    return (
        <div>
            {items.map(x => (
                <li key={x.id}>{x.Item} - {x.Quantity}</li>
            ))}
        </div>
    );
}

export default Items;
