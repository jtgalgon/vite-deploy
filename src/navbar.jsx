import './css/navbar.css'
import {Link} from 'react-scroll'
function navbar() {
  return (
    <div className='header'>
      <nav className='navbar'>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <a href="#home">Home</a>
          </li>
          <li className='nav-item'>
            <a href="#projects">Projects</a>
          </li>
          <li className='nav-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar