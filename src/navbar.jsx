import './css/navbar.css'
import {Link} from 'react-scroll'


function navbar() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to="contact" spy={true} smooth={true} offset={-110} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar