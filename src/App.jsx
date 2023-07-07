import Fade from 'react-reveal/Fade'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './projects.jsx'
import Contact from './contact.jsx'
import './css/App.css'
function App() {

  return (
    <div className='app-container'>
      <div className='app-page'>
        <Home/>
      </div>
      <div className='app-page'>
        <About/>
      </div>
      <div className='app-page'>
        <Contact/>
      </div>
    </div>
  )
}

export default App
