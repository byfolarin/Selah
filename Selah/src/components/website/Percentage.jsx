import React, { useState } from 'react'

const Percentage = () => {

            const [types,setTypes] = useState("")
            const [tipes, setTipes] = useState("")


  return (
    <div className='contains'>

    <div className="inputss">
      <input type="text" value={types} placeholder='Your name' />
      <input type="text" value={tipes} placeholder='Your partners Name'/>
    </div>

    <button className='submit-btn'>Submit</button>
    </div>
  )
}

export default Percentage
