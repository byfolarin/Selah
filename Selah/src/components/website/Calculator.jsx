import React, { useState } from 'react'

const Calculator = ({input,setInput,newinput, setNewinput}) => {

const [display,setDisplay] = useState("Hey")

 const getInput = (e) =>{
    setInput(e.target.value)
 }

 const newInput = (e) =>{
    setNewinput(e.target.value)
 }


function solveInput (){
    const solution = getInput + newInput;
    return solution
}






  return (
    <div className='container'>
      <p>{display}</p>

      <div className="inputs-container">

      <div className="input">
        <input type="text" value ={input} onChange={getInput}/>
      </div>

      <div className="input">
        <input type="text" value ={newinput} onChange={newInput}/>
      </div>

      </div>

      <div className="new-btn">
        <button onClick={solveInput}>add</button>
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
