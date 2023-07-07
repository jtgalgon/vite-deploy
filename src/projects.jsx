import './css/projects.css'
import Fade from 'react-reveal/Fade'
import {FaLinux} from 'react-icons/fa'
import {FaMicrochip} from 'react-icons/fa'
import {PiGraphDuotone} from 'react-icons/pi'
import Chip8Image from './images/chip8.jpg'
import ClusteringImage from './images/clustering.jpg'
import PCAImage from './images/PCA.jpg'


function projects() {
  return (
    /* 
    <div className='projects' id='projects'>
      <h1>Projects.</h1>
      <div className='projects-container'>
        <Fade top>
        <div className='projects-section'>
          <h3>XV6-Linux: {<FaLinux/>}</h3> 
          <p>Implemented Waldspurger and Weihl's stride scheduling to the re-implemented Unix V6 operating system for more efficient process management. Added a shell terminal that supports chain piping and redirection Learned general OS architecture and improved on C skills.  </p>
        </div>
        <div className='projects-section'>
          <h3>CHIP-8 Emulator: {<FaMicrochip/>}</h3> 
          <img src={Chip8Image} alt="chip-8 emulator" className='project-images'/>
          <p>Program simulates CIHP-8 hardware architecture and allows for its ROM files to be run on Windows OS. Learned CHIP-8 Hardware architecture and improved on JavaScript skills.</p>
        </div>
        <div className='projects-section'>
          <h3>Yale Face Projections: {<PiGraphDuotone/>}</h3>
          <img src={ClusteringImage} alt="Yale Face Projections PCA graph" className='project-images'/> 
          <p>Program takes a subset of the Yale face dataset and implements the program component analysis (PCA) equation to find each pictures average projection. Improved linear algebra skills and python implementation sills. </p>
        </div>
        <div className='projects-section'>
          <h3>Pokémon Clustering:</h3>
          <img src={PCAImage} alt="clustering" className='project-images'/> 
          <p>Takes a database of over 800 Pokémon and implements hierarchical agglomerative clustering that groups each Pokémon into clusters based on its overall stats/distance. Improved on artificial intelligence knowledge and python skills. </p>
        </div>
        </Fade>
      </div>
    </div>
    */
   <>Page 2</>
  )
}

export default projects