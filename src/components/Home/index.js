import DisplayPhoto from '../../assets/images/Elsie_image.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          Hi, <br /> I'm
          <img src={DisplayPhoto} alt="developer-image" />
          Elsie Lawrie
          <br />
          Junior Full Stack Developer
        </h1>
        <h2>Digital Designer || Junior Full Stack Developer</h2>
        <Link to="/contact" className="button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Home
