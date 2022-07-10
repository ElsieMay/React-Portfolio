import LogoTitle from '../../assets/images/Elsie-E.png'
import DisplayImage from '../../assets/images/Elsie_image.jpg'
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
          CONTACT ME
        </Link>
      </div>
      <div>
        <img
          className="Image"
          src={DisplayImage}
          alt="developer-display-image"
        />
      </div>
    </div>
  )
}

export default Home
