import React, { useState } from 'react'

const Percentage = () => {

            const [name,setName] = useState("")
            const [partner, setPartner] = useState("")


            function clickBait (e) {
                setName(e.target.value)
            }

            function clickHandle (e) {
                setPartner(e.target.value)
            }

          

            function clickSort(){
                const calculation = Math.round(Math.random() * 100);
                return `${clickHandle} and ${clickBait} are ${calculation} compatible`
            }


  return (
    <div className='contains'>

    <div className="inputss">
      <input type="text" value={name} onChange={clickBait} placeholder='Your name' />
      <input type="text"  value={partner} onChange={clickHandle} placeholder='Your partners Name'/>
    </div>

    <h5>
       {clickSort}
    </h5>

    <button className='submit-btn' onClick={clickSort}>Submit</button>
    </div>
  )
}

export default Percentage
