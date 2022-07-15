import './index.scss'
import Project from './Project.js'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Portfolio = ({ slides }) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <div className="portfolio-page">
      {' '}
      <div className="text-area">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        {Project.map((slide, index) => {
          return <div>{slide}</div>
        })}
      </div>
    </div>
  )
}
// exports layout function
export default Portfolio
