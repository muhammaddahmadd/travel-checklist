import { useState } from "react"
import "../Quiz1.1/style.css"


function Quiz(){
    return <div className="main">
        <Form />


    </div>
}

function Form(){
    // const [myName] = useState(prompt("Enter your Name").toLocaleLowerCase())
    // const [friedName] = useState(prompt("Enter your Friend's Name").toLocaleLowerCase())
const [amount, setAmount] = useState("")
const [myExp, setMyExp] = useState("")
const [friendExp, setfriendExp] = useState("")

// const myName = prompt("Enter your Name").toLocaleLowerCase();
// const friendName = prompt("Enter your Friend's Name").toLocaleLowerCase();
    const myName = "Ahmad";
    const friedName = "Khan";


    function handleAmount(e){
        if (e.target.value <= 0 || isNaN(e.target.value)) return
        setAmount(Number(e.target.value))
        console.log(amount)
    }

    function handleMine(e) {
        setMyExp(e.target.value)
    }
    function handleFren(e) {
        setfriendExp(e.target.value)

    }

    let exp;
    if (myExp === "okay") exp = 0;
    if (myExp === "good")  exp = (amount * 10)/100 ;
    if (myExp === "excellent")  exp = (amount * 20) / 100 ;
   
    let fexp;
    if (friendExp === "okay") fexp = 0;
    if (friendExp === "good") fexp = (amount * 10) / 100 ;
    if (friendExp === "excellent") fexp = (amount * 20) / 100 ;


    return <div className="">
        
        <label>How much was the bill?</label>
        <input type="number" value={amount} onChange={handleAmount} placeholder="enter amount" />
            <br></br>

        <label>How did you like the service, `Mr {myName}`?</label>
        <select value={myExp} onChange={handleMine}>
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>


        <br></br>
        <label>How did your friend like the service, `Mr {friedName}`?</label>
        <select value={friendExp} onChange={handleFren} >
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>

        {amount && <div>
            <p>Your bill : `{amount}$`</p>
            {<p>`{myName} Tip` : `{exp <= 0  || exp === undefined?  "Please select your tip": exp + "$" }`</p>}
            <p>`{friedName} Tip` : `{fexp <= 0 || fexp === undefined ? "Please select your tip" : fexp + "$"}`</p>
            {!isNaN(exp) && !isNaN(fexp)? <p>Total Paid: `{amount + exp + fexp}$`</p> : "" }
        </div>}
    </div>


        }




export default Quiz;