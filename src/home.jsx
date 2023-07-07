import './css/home.css'
import profile_pic from './images/profile.png'
import {LiaLinkedin} from 'react-icons/lia'
import {BiLogoInstagram} from 'react-icons/bi'
import {FaGithubSquare} from 'react-icons/fa'

function home() {
  return (
   <div>
    <div className='home' id='home'>
      <Greeting/>
      <Image/>
    </div>
    <div className='link-containter'>
      <Links/>
    </div>
  </div>
  )
}

function Image(){
  return(
    <div className='icon-container'>
      <img className='home-icon' src={profile_pic} alt="profile" />
    </div>
  )
}

function Greeting(){
  return(
    <div className='typed-out'>Joshua Galgon.</div>
  )
}

function Links(){
  const icon_size = 60
  return(
    <div>
      <nav className='navbar'>
        <ul className='link-menu'>
          <li className='link-item'>
            <a href="https://www.linkedin.com/in/joshua-galgon-87b156233/">
              <LiaLinkedin size={icon_size}/>
            </a>
          </li>
          <li className='link-item'>
            <a href="https://www.instagram.com/j.galgon">
              <BiLogoInstagram size={icon_size}/>
            </a>
          </li>
          <li className='link-item'>
            <a href="https://github.com/jtgalgon">
              <FaGithubSquare size={icon_size}/>
            </a>
            </li>
      </ul>
      </nav>
    </div>
  )
}

export default home