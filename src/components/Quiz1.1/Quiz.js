import "../Quiz1.1/style.css"


function Quiz(){
    return <div className="main">
        <Form />


    </div>
}

function Form(){


    return <form className="">
        <label>How much was the bill?</label>
        <input type="number" placeholder="enter amount" />
            <br></br>
        <label>How did you like the service?</label>
        <select >
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>
        <br></br>
        <label>How did your friend like the service?</label>
        <select >
            <option value="okay">Okay</option>
            <option value="good">Good</option>
            <option value="excellent">Excellent</option>
        </select>
    </form>
}


function Display(){
    return <div className="display">
        <h3>Your bill:</h3>
    </div>
}




export default Quiz;