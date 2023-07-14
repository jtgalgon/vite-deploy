import './css/projects.css'
import Fade from 'react-reveal/Fade'
import {VscTerminalLinux} from 'react-icons/vsc'
import {FaMicrochip} from 'react-icons/fa'
import {PiGraphDuotone} from 'react-icons/pi'
import Chip8Image from './images/chip8.jpg'
import ClusteringImage from './images/clustering.jpg'
import PCAImage from './images/PCA.jpg'
import Linux from './images/linux.jpg'
import { isMobile } from 'react-device-detect'
import {MdCatchingPokemon} from 'react-icons/md'


function projects() {
  return (
    <div className='projects' id='projects'>
      <h1 className={isMobile ? 'mobile-h1' : 'browser-h1'}>Projects.</h1>
      <div className={isMobile ? 'mobile-projects-container' : 'browser-projects-container'}>
        <Fade bottom>
        <div className={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}> 
          <h3 className='title'>XV6-Linux: </h3>
          <p className='description'>Implemented Waldspurger and Weihl's stride scheduling to the re-implemented Unix V6 operating system for more efficient process management. Added a shell terminal that supports chain piping and redirection Learned general OS architecture and improved on C skills. </p>
          <img src={Linux} alt="Linux Image" />
          <p className='logo'><VscTerminalLinux size={50} /></p>
        </div>
        <div className={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3 className='title'>CHIP-8 Emulator: </h3>
          <p className='description'> Program simulates CIHP-8 hardware architecture and allows for its ROM files to be run on Windows OS. Learned CHIP-8 Hardware architecture and improved on JavaScript skills.</p>
          <img src={Chip8Image} alt="Chip8 image" />
          <p className='logo'><FaMicrochip size={50} /></p>
        </div>
        <div className={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3 className='title'>Pokémon Clustering: </h3>
          <p className='description'>Takes a database of over 800 Pokémon and implements hierarchical agglomerative clustering that groups each Pokémon into clusters based on its overall stats/distance. Improved on artificial intelligence knowledge and python skills.</p>
          <img src={ClusteringImage} alt="Clustering image" />
          <p className='logo'><MdCatchingPokemon size={50} /></p>
        </div>
        <div className={isMobile ? 'mobile-projects-section' : 'browser-projects-section'}>
          <h3 className='title'>Yale Face Projections: </h3>
          <p className='description'>Program takes a subset of the Yale face dataset and implements the program component analysis (PCA) equation to find each pictures average projection. Improved linear algebra skills and python implementation sills.</p>
          <img src={PCAImage} alt="Yale image" />
          <p className='logo'><PiGraphDuotone size={50} /></p>
        </div>
        </Fade>
      </div>
      
    </div>
  )
}

export default projects