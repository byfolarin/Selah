import About from './components/website/About'
import Website from './components/website/Website'
import {Routes,Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
                  <div className="container">
                  <div className="top-bar">

                 
                  <Link to="/"className="logo">Selah!</Link>
                 
                

                      <nav className='navigation'>
                        <ul>
                          <Link to="/" className='navv'>Case</Link>
                          <Link to="/About" className='navv'>About</Link>
                          <Link to="/" className='navv'>Contact</Link>
                        </ul>
                    </nav>
                  </div>
                  </div>


                  <Routes>

                  <Route path='/' element={<Website/>} />
                 <Route path='/About' element={ <About />} />

                  </Routes>
    </>
  )
}

export default App
