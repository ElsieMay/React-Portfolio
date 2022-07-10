import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import MainLogo from '../../assets/images/EL-LOGO.png'
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
    <Link className="logo" to="/">
      <img src={MainLogo} alt="logo" />
      <img className="sub-logo" src={SubLogo} alt="subtitlelogo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#8690b4" />
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#8690b4" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#8690b4" />
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#8690b4" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/elsie-lawrie-090371b5/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#8690b4" />
        </a>
      </li>
      <li>
        <a target="blank" rel="noreferrer" href="https://github.com/ElsieMay">
          <FontAwesomeIcon icon={faGithub} color="#8690b4" />
        </a>
      </li>
      <li>
        <a
          target="blank"
          rel="noreferrer"
          href="https://twitter.com/ElsieLawrie"
        >
          <FontAwesomeIcon icon={faTwitter} color="#8690b4" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
