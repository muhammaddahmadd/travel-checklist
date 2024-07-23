import React from "react";
import Items from "./Items";


function PackingLists({items}) {


    return (
        <div  className="list">
            <ul>
        {
            items.map(items=> (
                <Items items={items}/>
            ))
        }
            </ul>
        </div>
       
    )
}

export default PackingLists;