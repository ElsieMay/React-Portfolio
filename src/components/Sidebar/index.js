import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import MainLogo from '../../assets/images/Elsie-E.png'
import SubLogo from '../../assets/images/ELSIE-SUB-LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/react-portfolio/">
      <img src={MainLogo} className="main-logo" alt="logo" />
      <img className="sub-logo" src={SubLogo} alt="subtitlelogo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/react-portfolio/">
        <FontAwesomeIcon icon={faHome} color="white" className="icon" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="about-link"
        to="/react-portfolio/about"
      >
        <FontAwesomeIcon icon={faUser} color="white" className="icon" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/react-portfolio/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="white" className="icon" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="contact-link"
        to="/react-portfolio/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="white" className="icon" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/elsie-lawrie-090371b5/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" className="icon" />
        </a>
      </li>
      <li>
        <a target="blank" rel="noreferrer" href="https://github.com/ElsieMay">
          <FontAwesomeIcon icon={faGithub} color="white" className="icon" />
        </a>
      </li>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://twitter.com/ElsieLawrie"
        >
          <FontAwesomeIcon icon={faTwitter} color="white" className="icon" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
