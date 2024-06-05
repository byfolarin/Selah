import React from 'react'

const Calculator = ({input,setInput}) => {

 const getInput = (e) =>{
    setInput(e.target.value)
 }





  return (
    <div className='container'>
      <p>This will change</p>

      <div className="input">
        <input type="text" value ={input} onChange={getInput}/>
      </div>

      <div className="new-btn">
        <button>add</button>
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
