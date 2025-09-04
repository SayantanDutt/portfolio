import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {

  const [letterClass, setLetterClass]= useState('text-animate')
  const nameArray = ['a','y','a','n','t','a','n']
  const jobArray = ['w','e','b',' ','e','n','t','h','u','s','i','a','s','t','.']

  useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 4000);

  // cleanup function
  return () => clearTimeout(timeout);
}, []);



  return (
    <>
    <div className="container home-page" >
      <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span> 
              <span className={`${letterClass} _12`}>i,</span> 
              <br /> 
              <span className={`${letterClass} _13`}>I</span> 
              <span className={`${letterClass} _14`}>'m</span>   
             <img src={LogoTitle} alt="developer" /> 
             <AnimatedLetters letterClass={letterClass}
             strArray={nameArray}
             idx={15}/>
             <br/>

            <AnimatedLetters letterClass={letterClass}
             strArray={jobArray}
             idx={22}/>
             </h1>

             <h2>Backend Developer / Java Expert </h2>
             <Link to="/contact" className='flat-button'> CONTACT ME</Link>
         </div>

         <Logo/>

    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Home