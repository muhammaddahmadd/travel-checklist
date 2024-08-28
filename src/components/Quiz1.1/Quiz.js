import { useState } from "react"
import "../Quiz1.1/style.css"


function Quiz(){
    return <div className="main">
        <Form />


    </div>
}

function Form(){
const [amount, setAmount] = useState("")
const [myExp, setMyExp] = useState("null")
const [frenExp, setFrenExp] = useState("null")


    function handleAmount(e){
        if (e.target.value <= 0 || isNaN(e.target.value)) return
        setAmount(Number(e.target.value))
        console.log(amount)
    }

    function handleMine(e) {
        setMyExp(e.target.value)
    }
    function handleFren(e) {
        setFrenExp(e.target.value)
    }

    let exp;
    if (myExp === "okay") exp = amount;
    if (myExp === "good")  exp = (amount * 10)/100 ;
    if (myExp === "excellent")  exp = (amount * 20) / 100 ;
   
    let frexp;
    if (frenExp === "okay") frexp = amount;
    if (frenExp === "good") frexp = (amount * 10) / 100 ;
    if (frenExp === "excellent") frexp = (amount * 20) / 100 ;


    return <div className="">
        <label>How much was the bill?</label>
        <input type="number" value={amount} onChange={handleAmount} placeholder="enter amount" />
            <br></br>

        <label>How did you like the service?</label>
        <select value={myExp} onChange={handleMine}>
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>


        <br></br>
        <label>How did your friend like the service?</label>
        <select onChange={handleFren} value={frenExp}>
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>

        {amount && <div>
            <p>Your bill : `{amount}$`</p>
            <p>Your tip : `{exp}$`</p>
            <p>Your Friend tip : `{frenExp}$`</p>
            <p>Total Paid: `{amount + exp + frenExp}$`</p>
        </div>}
    </div>

}







export default Quiz;