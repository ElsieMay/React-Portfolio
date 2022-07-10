import './index.scss'
import { Link } from 'react-router-dom'
import MainLogo from '../../assets/images/EL-LOGO.png'
import SubLogo from '../../assets/images/ELSIE-SUB-LOGO.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={MainLogo} alt="logo" />
      <img className="sub-logo" src={SubLogo} alt="subtitlelogo" />
    </Link>
  </div>
)

export default Sidebar
