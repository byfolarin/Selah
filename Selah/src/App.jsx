import About from './components/website/About'
import Case from './components/website/Case'
import Contact from './components/website/Contact'
import Website from './components/website/Website'
import {Routes,Route, Link} from 'react-router-dom'


function App() {


  function click (){
    
  }

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
                        </ul>
                    </nav>
                  </div>
                  </div>


                  <Routes>

                  <Route path='/' element={<Website/>} />
                  <Route path='/About' element={ <About />} />
                  <Route path='/Case' element={ <Case />} />
                  <Route path='/Contact' element={ <Contact/>} />

                  </Routes>
    </>
  )
}

export default App
