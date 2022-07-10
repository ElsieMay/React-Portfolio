import LogoTitle from '../../assets/images/Elsie-E.png'
import DisplayImage from '../../assets/images/Elsie_image.jpg'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['l', 's', 'i', 'e']
  const jobArray = [
    'J',
    'u',
    'n',
    'i',
    'o',
    'r',
    ' ',
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer-lettering" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
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
