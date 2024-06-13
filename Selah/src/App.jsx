import About from './components/website/About'
import Case from './components/website/Case'
import Contact from './components/website/Contact'
import Website from './components/website/Website'
import Timer from './components/website/Timer'
import Percentage from './components/website/Percentage'
import Calculator from './components/website/Calculator'
import {Routes,Route, Link} from 'react-router-dom'
import { useState } from 'react'
import Greeting from './components/website/Greeting'
import Guessing from './components/website/Guessing'
import Object from './components/website/Object'


function App() {


  const [input, setInput] = useState(0)
  const [newinput, setNewinput] =useState(0)

  return (
    <>
                  <div className="container">
                  <div className="top-bar">
                  <Link to="/"className="logo">Selah!</Link>
                 
                      <nav className='navigation'>
                        <ul>
                          <Link to="/Case" className='navv'>Case</Link>
                          <Link to="/About" className='navv'>About</Link>
                          <Link to="/Contact" className='navv'>Contact</Link>
                          <Link to="/Timer" className='navv'>Timer</Link>
                          <Link to="/Percentage" className='navv'>Percentage</Link>
                          <Link to="/Calculator" className='navv'>Calculator</Link>
                          <Link to="/Greeting" className='navv'>Greeting</Link>
                          <Link to="/Guessing" className='navv'>Guessing</Link>
                          <Link to="/Object" className='navv'>Object</Link>
                        </ul>
                    </nav>
                  </div>
                  </div>


                  <Routes>
                  <Route path='/' element={<Website/>} />
                  <Route path='/About' element={ <About />} />
                  <Route path='/Case' element={ <Case />} />
                  <Route path='/Contact' element={ <Contact/>} />
                  <Route path='/Timer' element={ <Timer/>} />
                  <Route path='/Greeting' element={ <Greeting/>} />
                  <Route path='/Percentage' element={ <Percentage/>} />
                  <Route path='/Object' element={ <Object/>} />
                  <Route path='/Guessing' element={ <Guessing/>} />
                  <Route path='/Calculator' element={ <Calculator 
                  input = {input} setInput = {setInput}
                  newinput = {newinput} setNewinput = {setNewinput}
                  />} />
                  #
                  </Routes>
    </>
  )
}

export default App
