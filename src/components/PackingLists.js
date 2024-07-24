import React from "react";
import Items from "./Items";


function PackingLists({items}) {
   


    return (
        <div  className="list">
            <ul>
        {
            items.map((items, i)=> (
                <Items items={items} id={i} key={i}/>
            ))
        }
            </ul>
        </div>
       
    )
}

export default PackingLists;