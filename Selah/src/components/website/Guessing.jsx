import React, { useState } from 'react'

const Guessing = () => {

    const [text,setText] = useState('');
    const randomNumber = Math.floor(Math.random() * 100);



  return (
    <div className='container'>
      <h1>Number Guessing Game</h1>
      <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div className="submit-input">
      <p>Enter a guess:{text}</p>
      <input type="number" value={text} name="Please fill out this" id="" />
      <button>submit</button>
      </div>
    </div>
  )
}

export default Guessing
