import './project.scss'
import PortfolioImage from '../../assets/images/Screen Shot 2022-07-14 at 1.35.15 pm.jpg'
import WeatherDashboardImage from '../../assets/images/Screen Shot 2022-07-14 at 1.43.22 pm.jpg'
import APIVideo from '../../assets/images/Untitled_ Jun 29, 2022 9_08 PM.mp4'

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
        <h2 className="title">Server Side API</h2>
        <br></br>
        <h2>HTML || Javascript || CSS || OpenWeather One Call API </h2>
        <br></br>
        <div>
          <img
            className="Image"
            src={WeatherDashboardImage}
            alt="developer-portfolio-image"
          />
        </div>
        <p className="blurb">
          The motivation for this project was to build a weather dashboard that
          will run in the browser and feature dynamically updated HTML and CSS.
          The dashboard uses the OpenWeather One Call API to retrieve weather
          data for cities. I learnt about using API's to retrieve information,
          API keys, Javascript functions, event handlers and algorithms, CSS,
          HTML, local storage, and much more.
        </p>
        <br></br>
        <div className="links">
          <a
            href="https://github.com/ElsieMay/06_Homework_Server_side_APIs_Weather_Dashboard"
            className="github-link"
          >
            See Github Code
          </a>
          <a
            href="https://elsiemay.github.io/06_Homework_Server_side_APIs_Weather_Dashboard/"
            className="github-link"
          >
            See Deployed Code
          </a>
        </div>
      </div>
      <div className="slide">
        <h2 className="title">Personal Portfolio</h2>
        <br></br>
        <h2>HTML || Javascript || Express.js || Mongo DB </h2>
        <br></br>
        <div>
          <source src={APIVideo} type="video/mp4" />
        </div>
        <p className="blurb">
          The motivation was to build an API for a social network web
          application where users can share their thoughts, react to friends’
          thoughts, and create a friend list. I built this API completely from
          scratch using Express.js for routing, a MongoDB database, and the
          Mongoose ODM. I learnt about using express js, Mongo DB, Mongoose ODM,
          insomnia, seeding databases, authentication, using schemas and much
          more.
        </p>
        <br></br>
        <div className="links">
          <a
            href="https://github.com/ElsieMay/06_Homework_Server_side_APIs_Weather_Dashboard"
            className="github-link"
          >
            See Github Code
          </a>
          <a
            href="https://elsiemay.github.io/06_Homework_Server_side_APIs_Weather_Dashboard/"
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
