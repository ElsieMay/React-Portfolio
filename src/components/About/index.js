import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-area">
        <h1>
          <AnimatedLetters
            // letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a junior full stack developer, with a background in visual and
          fashion design. I am a passionate creative, driven by fairness and
          equity, with respect for individual expression and authentic
          perspectives. Using strategy, discovery and collaboration, I am driven
          to find efficient design solutions.
        </p>
        <p>
          I am currently seeking a developer position where I can learn, grow
          and contribute as best possible.
        </p>
      </div>
    </div>
  )
}

export default About
