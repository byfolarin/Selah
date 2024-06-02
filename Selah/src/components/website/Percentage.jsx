import React, { useState } from 'react'

const Percentage = () => {

            const [types,setTypes] = useState("")
            const [tipes, setTipes] = useState("")


            function clickBait (e) {
                setTypes(e.target.value)
            }

            function clickHandle (e) {
                setTipes(e.target.value)
            }

          

            function clickSort(){
                const calculation = Math.round(Math.random() * 100);
                const stingy = `${clickHandle()} and ${clickBait} are ${calculation} compatible`

                return stingy
            }


  return (
    <div className='contains'>

    <div className="inputss">
      <input type="text" value={types} onChange={clickBait} placeholder='Your name' />
      <input type="text"  value={tipes} onChange={clickHandle} placeholder='Your partners Name'/>
    </div>

    <h5>
       {clickSort()}
    </h5>

    <button className='submit-btn' onClick={clickSort}>Submit</button>
    </div>
  )
}

export default Percentage
