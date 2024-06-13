import React, { useEffect, useState } from 'react'

const Guessing = () => {

    const [text,setText] = useState(0);
    const [prev, setPrev] = useState([]);
    const [random, setRandom] = useState(0);
    const [disableds, setDisabled] = useState(false); // Initial state for disabled
    const [message, setMessage] = useState("")
    

    function clickHandle(e) {
        setText(e.target.value); // Update text state with the value 
      }


      useEffect(()=>{
        const getRandom = Math.floor(Math.random() * 100);
        setRandom(getRandom);
        },[])
    

    function handleClick(){
        setPrev(item =>[...item,text]);
        setText(" ");
        setDisabled(prev.length === 9);

    }


    useEffect (() =>{
      const newMessage = (prev, random) =>{

        let newMessage;

        if (prev < random){
        newMessage = "Your text is too low"
        } else if (prev > random){
        newMessage = "Your text is too low"
        } else (newMessage = "Perfect score")
      }

    setMessage(newMessage);
    }, [])


  

  
  
 
    console.log(random)


  return (
    <div className='container'>
      <h1>Number Guessing Game</h1>
      <h2>We have selected a random number between 1 and 100.
        <br /> See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</h2>

    <div className="submit-input">
      <p>Enter a guess:</p>
      <input type="number" value={text} onChange={clickHandle} id="" />
      <button onClick={handleClick} disabled={disableds}>submit</button>
      </div>

      <p>Previous Guess:{prev.map(x =>(
        <span>{x} </span>
      ))}</p>
      <p >Hello {message}</p>
    </div>
  )
}



export default Guessing
