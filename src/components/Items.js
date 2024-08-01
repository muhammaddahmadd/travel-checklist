import React, { useState } from "react";

function Items({ name, id, quantity, detail, items }) {
    const [checked, setChecked] = useState({})
    const [deleted, setDeleted] = useState([...items]);

    
    console.log(id); 

    function handleChecked(id) {
        const chec = []
        setChecked(prevChecked => ({ ...prevChecked, [id]: !prevChecked[id] }));
    }

    const handleDelete = (id) => {
        setDeleted(deleted.filter(item => item.id !== id));
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => handleChecked(id)}
            />
            {quantity} - {name}({detail})
            <button className="close-icon" onClick={handleDelete}>X</button>
        </li>
    );
}

export default Items;
