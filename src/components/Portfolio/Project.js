import './project.scss'
import PortfolioImage from '../../assets/images/Screen Shot 2022-07-14 at 1.35.15 pm.jpg'
import WeatherDashboardImage from '../../assets/images/Screen Shot 2022-07-14 at 1.43.22 pm.jpg'

const Project = () => {
  return (
    <div className="slides-container">
      <div className="slide">
        <h2 className="title">Personal Portfolio</h2>
        <br></br>
        <h2>HTML || Javascript || Sass || CSS || React </h2>
        <br></br>
        <div>
          <img
            className="Image"
            src={PortfolioImage}
            alt="developer-portfolio-image"
          />
        </div>
        <p className="blurb">
          The motivation for this project was to create a dynamic, deployed
          portfolio for potential clients and future employers to peruse my
          skills in flexbox, media queries, and CSS variables through various
          sample projects. I solved the criteria of this potential employer by
          providing said portfolio, with a recent photo and examples of previous
          work. When clicking through the site, the UI scrolls to the
          corresponding sections, with titled images and responsive website
          design.
        </p>
        <br></br>
        <div className="links">
          <a
            href="https://github.com/ElsieMay/react-portfolio"
            className="github-link"
          >
            See Github Code
          </a>
          <a
            href="https://elsiemay.github.io/react-portfolio/"
            className="github-link"
          >
            See Deployed Code
          </a>
        </div>
      </div>
      <div className="slide">
        <h2 className="title">Personal Portfolio</h2>
        <br></br>
        <h2>HTML || Javascript || Sass || CSS || React </h2>
        <br></br>
        <div>
          <img
            className="Image"
            src={WeatherDashboardImage}
            alt="developer-portfolio-image"
          />
        </div>
        <p className="blurb">
          The motivation for this project was to create a dynamic, deployed
          portfolio for potential clients and future employers to peruse my
          skills in flexbox, media queries, and CSS variables through various
          sample projects. I solved the criteria of this potential employer by
          providing said portfolio, with a recent photo and examples of previous
          work. When clicking through the site, the UI scrolls to the
          corresponding sections, with titled images and responsive website
          design.
        </p>
        <br></br>
        <div className="links">
          <a
            href="https://github.com/ElsieMay/react-portfolio"
            className="github-link"
          >
            See Github Code
          </a>
          <a
            href="https://elsiemay.github.io/react-portfolio/"
            className="github-link"
          >
            See Deployed Code
          </a>
        </div>
      </div>
    </div>
  )
}
// exports layout function
export default Project
