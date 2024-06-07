import React, { useEffect, useState } from 'react'

const Guessing = () => {

    const [text,setText] = useState('');
    const [guess, setGuess] = useState([])
    const randomNumber = Math.floor(Math.random() * 100);



  return (
    <div className='container'>
      <h1>Number Guessing Game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div className="submit-input">
      <p>Enter a guess:{text}</p>
      <input type="number"  name="Please fill out this" id="" />
      <button>submit</button>
      </div>

      <p>Previous Guess:{guess}</p>
      <p>Wrong</p>
      <p>Last Guess was too Low</p>
    </div>


  )
}

export default Guessing
