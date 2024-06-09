import React, { useEffect, useState } from 'react'

const Guessing = () => {

    const [text,setText] = useState(0);
    // const [guess, setGuess] = useState([]);
    const [prev, setPrev] = useState([]);
    const [random, setRandom] = useState('');

    

    function clickHandle(e) {
        setText(e.target.value); // Update text state with the value 
      }

    function handleClick(){
        setPrev(item =>[...item,text]);
        setText(" ")
    }
    
    useEffect(()=>{
    const getRandom = Math.floor(Math.random() * 100);
    setRandom(getRandom);
    },[])


    const preview = () =>{
      if (prev.length >= 10){
        disabled=true
      } else (disabled=!true)
    }
   


  return (
    <div className='container'>
      <h1>Number Guessing Game</h1>
      <h2>We have selected a random number between 1 and 100.
        <br /> See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</h2>

    <div className="submit-input">
      <p>Enter a guess:</p>
      <input type="number" value={text} onChange={clickHandle} id="" />
      <button onClick={handleClick} disabled={`${preview}`}>submit</button>
      </div>

      <p>Previous Guess:{prev.map(x =>(
        <span>{x} </span>
      ))}</p>
      <p>Wrong</p>
      <p>Last Guess was too Low</p>
    </div>
  )
}



export default Guessing
