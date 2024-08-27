import { useState } from "react";
import "../Exercsie1.1/style.css";

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
        title: "How long do I have to return my chair?",
        text:
            "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
        title: "Do you ship to countries outside the EU?",
        text:
            "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
];

export default function Exercise() {
    return (
        <div>
            <Accordion />
        </div>
    );
}

function Accordion() {
    const [curOpen, setCurOpen] = useState(null);
    return <div className="accordion">
        {faqs.map((faq, i)=> (
            <AccordionItem key={i} CurOpen={curOpen} onOpen = {setCurOpen} id={i+1} title={faq.title} >{faq.text}</AccordionItem>
        ))}
    </div>;
}


function AccordionItem({ id, title, children, onOpen, CurOpen }){
   console.log("current id:", id, "currentOpened :", CurOpen )
    // const isOpen = id === CurOpen;
    const [isOpen, setIsOpen] = useState(id)
// console.log(isOpen)
   function handleOpening(id){
    console.log(id)
       onOpen(id)
       setIsOpen(!isOpen)
   }
    return <div className={"item " + `${isOpen? "open": ""}`} onClick={()=>handleOpening(id)}>
        <p className="number">{id}</p>    
        <p className="title">{title}</p>
        <p className="icon">{isOpen? "-" : "+"}</p>
        {isOpen? <p className="content-box">{children}</p>  : ""}
    </div>
}



