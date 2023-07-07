import './css/home.css'
import profile_pic from './images/profile.png'
import {LiaLinkedin} from 'react-icons/lia'
import {BiLogoInstagram} from 'react-icons/bi'
import {FaGithubSquare} from 'react-icons/fa'

function home() {
  return (
    <div className='home' id='home'>
      <div className='home-container'>
        <Greeting className='home-section'/>
        <Image className='home-section'/>
        <Links className='home-section'/>
      </div>
    </div>
    
  )
}

function Image(){
  return(
      <img className='home-icon' src={profile_pic} alt="profile" />

  )
}

function Greeting(){
  return(
    <div className='typed-out'>
      Joshua Galgon.
    </div>
  )
}

function Links(){
  const icon_size = 60

  return(
    <div className='link-container'>
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