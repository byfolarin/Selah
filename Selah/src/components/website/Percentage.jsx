import React, { useEffect, useState } from 'react';

const Percentage = () => {
    const [name, setName] = useState("");
    const [partner, setPartner] = useState("");
    const [message, setMessage] = useState("");

    function clickBait(e) {
        setName(e.target.value);
    }

    function clickHandle(e) {
        setPartner(e.target.value);
    }

    // function sortClip {
    //     const answer = clickBait ().parse 
    // }


    function clickSort() {
        const calculation = Math.round(Math.random() * 100);
        const newMessage = `${name} and ${partner} are ${calculation}% compatible`;
        setMessage(newMessage); 
    }

    return (
        <div className='contains'>
            <div className="inputss">
                <input type="text" value={name} onChange={clickBait} placeholder='Your name' />
                <input type="text" value={partner} onChange={clickHandle} placeholder='Your partners name'/>
            </div>

            <h4>
              {message}
            </h4>

            <button className='submit-btn' onClick={clickSort}>Submit</button>
        </div>
    );
};

export default Percentage;
