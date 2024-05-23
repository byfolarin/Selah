import About from './components/website/About'
import Website from './components/website/Website'
import {Routes,Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
                  <div className="container">
                  <div className="top-bar">
                      <div className="logo">
                        Selah!
                        </div>

                      <nav className='navigation'>
                        <ul>
                          <li>Case</li>
                          <li>About</li>
                          <li>Contact</li>
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
