import LogoTitle from '../../assets/images/Elsie-E.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer-lettering" />
          lsie Lawrie
          <br />
          Junior Full Stack Developer
        </h1>
        <h2>Digital Designer || Javascript Enthusiast </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
