import React, { useEffect, useState } from 'react';

const Guessing = () => {
    const [text, setText] = useState('');
    const [prev, setPrev] = useState([]);
    const [random, setRandom] = useState(0);
    const [disableds, setDisabled] = useState(false); // Initial state for disabled
    const [message, setMessage] = useState("");



    useEffect(() => {
        const getRandom = Math.floor(Math.random() * 100) + 1;
        setRandom(getRandom);
    }, []);



    function clickHandle(e) {
        setText(e.target.value); // Update text state with the value
    }



    function handleClick() {
        setPrev(item => [...item, text]);
        setText('');
        setDisabled(prev.length === 9);
    }



    useEffect(() => {
        if (prev.length > 0) {
            const lastGuess = prev[prev.length - 1];
            let newMessage;
            if (lastGuess < random) {
                newMessage = "Your guess is too low";
            } else if (lastGuess > random) {
                newMessage = "Your guess is too high";
            } else {
                newMessage = "Perfect score";
                setDisabled(true); // Disable input and button if the guess is correct
            }
            setMessage(newMessage);
        }
    }, [prev, random]);




    console.log(random);



    return (
        <div className='container'>
            <h1>Number Guessing Game</h1>
            <h2>
                We have selected a random number between 1 and 100.
                <br /> See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.
            </h2>

            <div className="submit-input">
                <p>Enter a guess:</p>
                <input type="number" value={text} onChange={clickHandle} id="" />
                <button onClick={handleClick} disabled={disableds}>submit</button>
            </div>

            <p>Previous Guess:{prev.map((x, index) => (
                <span key={index}>{x} </span>
            ))}</p>
            <p>{message}</p>
        </div>
    );
}

export default Guessing;
