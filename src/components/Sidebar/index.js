import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import MainLogo from '../../assets/images/EL-LOGO.png'
import SubLogo from '../../assets/images/ELSIE-SUB-LOGO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
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
        <FontAwesomeIcon icon={faHome} color="white" />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
