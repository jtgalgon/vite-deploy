import './css/projects.css'
import Fade from 'react-reveal/Fade'
import {FaLinux} from 'react-icons/fa'
import {FaMicrochip} from 'react-icons/fa'
import {PiGraphDuotone} from 'react-icons/pi'
import Chip8Image from './images/chip8.jpg'
import ClusteringImage from './images/clustering.jpg'
import PCAImage from './images/PCA.jpg'
import { isMobile } from 'react-device-detect'


function projects() {
  return (
    <div className='projects' id='projects'>
      <h1 className={isMobile ? 'mobile-h1' : 'browser-h1'}>Projects.</h1>
      <div className={isMobile ? 'mobile-projects-container' : 'browser-projects-container'}>
        <div classname={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}> fuck this
          <div className='balls'>
            <h3>XV6-Linux:</h3>
            <p>Implemented Waldspurger and Weihl's stride scheduling to the re-implemented Unix V6 operating system for more efficient process management. Added a shell terminal that supports chain piping and redirection Learned general OS architecture and improved on C skills. </p>
          </div>
        </div>
        <div classname={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3>Section 2</h3>
        </div>
        <div classname={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3>Section 3</h3>
        </div>
        <div classname={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3>Section 4</h3>
        </div>
      </div>
    </div>
  )
}

export default projects