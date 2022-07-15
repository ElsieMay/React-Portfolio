import './project.scss'
import PortfolioImage from '../../assets/images/Screen Shot 2022-07-14 at 1.35.15 pm.jpg'

const Project = () => {
  return (
    <div className="slide">
      <h1>Personal Portfolio</h1>
      <br></br>
      <div>
        <img
          className="Image"
          src={PortfolioImage}
          alt="developer-portfolio-image"
        />
      </div>
      <a
        href="https://github.com/ElsieMay/react-portfolio"
        className="github-link"
      >
        See Github Code
      </a>
      <br></br>
      <a
        href="https://elsiemay.github.io/react-portfolio/"
        className="github-link"
      >
        See Deployed Code
      </a>
      <p className="blurb">
        The motivation for this project was to create a dynamic, deployed
        portfolio for potential clients and future employers to peruse my skills
        in flexbox, media queries, and CSS variables through various sample
        projects. I solved the criteria of this potential employer by providing
        said portfolio, with a recent photo and examples of previous work. When
        clicking through the site, the UI scrolls to the corresponding sections,
        with titled images and responsive website design.
      </p>
    </div>
  )
}
// exports layout function
export default Project
