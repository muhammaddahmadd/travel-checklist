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
    return <div className="accordion">
        {faqs.map((faq, i)=> (
            <AccordionItem key={i} title={faq.title} text={faq.text}/>
        ))}
    </div>;
}


function AccordionItem({key, title, text}){
    const [open, setOpen] = useState(false);

    return <div className="item">
        <p>{key}</p>
        <p>{title}</p>
        <p>{"+"}</p>
    </div>
}