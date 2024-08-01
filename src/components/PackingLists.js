import React from "react";
import Items from "./Items";


function PackingLists({items}) {
    
    // console.log(id)
   
    return (
        <div  className="list">
            <ul>
        {
            items.map((item, i)=> (
                <Items items={items} name={item.name} quantity={item.qty} detail={item.detail} id={i} key={i}/>
            ))
        }
            </ul>
        </div>
       
    )
}

export default PackingLists;