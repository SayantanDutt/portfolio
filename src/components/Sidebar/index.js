import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import sonu from '../../assets/images/sayantan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

   <div className='nav-bar' >
      <Link className='logo' to='/' >
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={sonu} alt="sayantan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sayantan-dutta-454b0326b/' >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/SayantanDutt' >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>


        <li>
          <a target="_blank" rel='noreferrer' href='https://x.com/Vilgaxx_31' >
            <FontAwesomeIcon icon={faSquareTwitter} color="#4d4d4e" />
          </a>
        </li>
      </ul>
   </div>
)


export default Sidebar 