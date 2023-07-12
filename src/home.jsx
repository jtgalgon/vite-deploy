import './css/home.css'
import profile_pic from './images/profile.png'
import {LiaLinkedin} from 'react-icons/lia'
import {BiLogoInstagram} from 'react-icons/bi'
import {FaGithubSquare} from 'react-icons/fa'
import {isMobile} from 'react-device-detect'
import Fade from 'react-reveal/Fade'
import React, { useState, useRef} from 'react';


function home() {
  return (
   <div>
      <div className='home' id='home'>
        <Greeting/>
        <Fade>
          <Image/>
        </Fade>
      </div>
      <div className={isMobile ? 'mobile-link-container' : 'browser-link-containter'}>
        <Links/>
      </div>
  </div>
  )
}

function Image(){
  return(
    <div className='icon-container'>
      <img className={isMobile ? 'mobile-home-icon' : 'browser-home-icon'} src={profile_pic} alt="profile" />
    </div>
  )
}

function Greeting(){
  return(
    <div className={isMobile ? 'mobile-typed-out' : 'browser-typed-out'}>Joshua Galgon.</div>
  )
}

function Links(){
  let icon_size = 0
  if(isMobile){
    icon_size = 60
  }else{
    icon_size = 60
  }
  console.log(isMobile)
  return(
    <div>
      <nav className='navbar'>
        <ul className={isMobile ? 'mobile-link-menu' : 'browser-link-menu'}>
          <Fade bottom>
          <li className={isMobile ? 'mobile-link-item' : 'browser-link-item'}>
            
            <a href="https://www.linkedin.com/in/joshua-galgon-87b156233/">
              <LiaLinkedin size={icon_size}/>
            </a>
          </li>
          <li className={isMobile ? 'mobile-link-item' : 'browser-link-item'}>
            <a href="https://www.instagram.com/j.galgon">
              <BiLogoInstagram size={icon_size}/>
            </a>
          </li>
          <li className={isMobile ? 'mobile-link-item' : 'browser-link-item'}>
            <a href="https://github.com/jtgalgon">
              <FaGithubSquare size={icon_size}/>
            </a>
            </li>
            </Fade>
      </ul>
      </nav>
    </div>
  )
}

export default home