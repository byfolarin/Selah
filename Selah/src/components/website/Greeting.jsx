import React, { useState } from 'react'

const Greeting = () => {

    const [prompts, setPrompts] = useState("");


    function sortClick (){
        const inputName = prompt("what's your name");
        setPrompts(inputName); 
    }

  return (
    <div className='container'>
      <h1>Hello What's Good:{prompts}</h1>
      <button onClick={sortClick}>Get Prompt</button>
    </div>
  )
}

export default Greeting
