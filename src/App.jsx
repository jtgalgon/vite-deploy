import Fade from 'react-reveal/Fade'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './projects.jsx'
import Contact from './contact.jsx'
function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Fade >
      <Home/>
      <About />
      <Contact/>
      </Fade>
    </div>
  )
}

export default App
