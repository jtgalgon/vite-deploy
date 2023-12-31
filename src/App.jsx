import Fade from 'react-reveal/Fade'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import './css/App.css'
import {isMobile} from 'react-device-detect'

function App() {
  return (
    <div className='app-container'>
      
      <Navbar/>
      <div className={isMobile ? 'mobile-app-page' : 'browser-app-page'}>
        <Home/>
      </div>
      <div className={isMobile ? 'mobile-app-page' : 'browser-app-page'}>
        <Projects/>
      </div>
      <div className={isMobile ? 'mobile-app-page' : 'browser-app-page'}>
        <Contact/>
      </div>
  </div>
  )
}

export default App
