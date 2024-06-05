import React, { useState } from 'react'

const Calculator = ({input,setInput,newinput,setNewinput}) => {

const [display,setDisplay] = useState("Hey")

 const getInput = (e) =>{
    setInput(e.target.value)
 }

 const newInput = (e) =>{
    setNewinput(e.target.value)
 }

 function handleClick(){
    const setClick = parseFloat(input) + parseFloat (newinput);
    setDisplay(setClick.toString()); // Update display state with the result
    console.log(setClick);
 }



  return (
    <div className='container'>
      <p>Result : {display}</p>
      <div className="inputs-container">

      <div className="input">
        <input type="text" id='input-form' value ={input} onChange={getInput} />
      </div>

      <div className="input">
        <input type="text" id='input-forms' value ={newinput} onChange={newInput} />
      </div>

     </div>

      <div className="new-btn">
        <button onClick={handleClick}>add</button>
        <button>subtract</button>
        <button>multiply</button>
        <button>divide</button>
        <button>reset input</button>
        <button>reset result</button>
      </div>
    </div>
  )
}

export default Calculator
