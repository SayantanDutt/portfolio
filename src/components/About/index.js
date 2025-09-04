import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

   useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  // cleanup function
  return () => clearTimeout(timeout);
}, []);



  return(

    <>
    <div className="container about-page">
        <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','B','O','U','T',' ','M','E']}
                idx={15}
                />
            </h1>

            <p>I am Sayantan Dutta, a Computer Science and Engineering student with strong skills in web development, backend systems,
               and database management. I have hands-on experience with React, TailwindCSS, Spring Boot, Flask, MySQL, and SQLite, 
               and I enjoy creating full-stack applications that are both functional and user-friendly.
                From building an enterprise-grade Asset Inventory Management System for PowerGrid to experimenting with language models and health diagnostic apps,
                 I’ve gained the ability to work across different technologies and deliver projects that solve real-world problems.</p>


                 <p>I approach every challenge with confidence and determination. I believe in my ability to learn quickly, adapt to new environments, 
                  and find solutions even in complex situations. Whether it’s debugging an error, designing a system, or presenting my work,
                   I carry the mindset that no task is too big if tackled with the right approach. This confidence drives me to step out of my comfort zone, 
                   take ownership of my work, and keep pushing myself to achieve more.</p>

                   <p>At the same time, I remain grounded and humble in my journey. I understand that growth comes not only from personal effort but also from learning
                     with and from others. I value teamwork, feedback, and the perspectives of those around me. 
                     No matter how much I achieve, I remind myself that there’s always more to learn and room to improve. 
                     This balance of ambition and humility helps me build meaningful connections and grow as both a learner and a professional.</p>


            
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                  <div className='face1'>
                      <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                  </div>
                  <div className='face2'>
                      <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                  </div>
                  <div className='face3'>
                      <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                  </div>
                  <div className='face4'>
                      <FontAwesomeIcon icon={faReact} color="#5ED4FA"/>
                  </div>
                  <div className='face5'>
                      <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                  </div>
                  <div className='face6'>
                      <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                  </div>
            </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About