import './project.scss'
import PortfolioImage from '../../assets/images/Screen Shot 2022-07-14 at 1.35.15 pm.jpg'
import WeatherDashboardImage from '../../assets/images/Screen Shot 2022-07-14 at 1.43.22 pm.jpg'
import APIVideo from '../../assets/images/Untitled_ Jun 29, 2022 9_08 PM.mp4'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
SwiperCore.use([Scrollbar, Navigation, Pagination])

const Project = () => {
  // const params = {
  //   // modules: [Navigation, Pagination],
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   spaceBetween: 30,
  // }
  const projects = [
    {
      title: 'Personal Portfolio',
      techStack: 'HTML || Javascript || Sass || CSS || React',
      image: PortfolioImage,
      desc: `The motivation for this project was to create a dynamic, deployed
            portfolio for potential clients and future employers to peruse my
            skills in flexbox, media queries, and CSS variables through various
            sample projects. I solved the criteria of this potential employer by
            providing said portfolio, with a recent photo and examples of previous
            work. When clicking through the site, the UI scrolls to the
            corresponding sections, with titled images and responsive website
            design.`,
      repo: 'https://github.com/ElsieMay/react-portfolio',
      deployedLink: 'https://elsiemay.github.io/react-portfolio/',
    },
    {
      title: 'Server Side API',
      techStack: 'HTML || Javascript || CSS || OpenWeather One Call API ',
      image: WeatherDashboardImage,
      desc: `The motivation for this project was to build a weather dashboard that
            will run in the browser and feature dynamically updated HTML and CSS.
            The dashboard uses the OpenWeather One Call API to retrieve weather
            data for cities. I learnt about using API's to retrieve information,
            API keys, Javascript functions, event handlers and algorithms, CSS,
            HTML, local storage, and much more.`,
      repo: 'https://github.com/ElsieMay/06_Homework_Server_side_APIs_Weather_Dashboard',
      deployedLink:
        'https://elsiemay.github.io/06_Homework_Server_side_APIs_Weather_Dashboard/',
    },
    {
      title: 'NoSQL Social Media API',
      techStack: 'HTML || Javascript || Express.js || Mongo DB',
      image: APIVideo,
      desc: `The motivation was to build an API for a social network web
            application where users can share their thoughts, react to friends'
            thoughts, and create a friend list. I built this API completely from
            scratch using Express.js for routing, a MongoDB database, and the
            Mongoose ODM. I learnt about using express js, Mongo DB, Mongoose ODM,
            insomnia, seeding databases, authentication, using schemas and much
            more.`,
      repo: 'https://github.com/ElsieMay/18_NoSQL_Social_Network_API',
      deployedLink:
        'https://drive.google.com/file/d/1PjMz9tSdvIEMoatuKr3mucFNh0p9pRSK/view',
    },
  ]
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={500}
      loop={true}
      touchRatio={1.5}
      navigation={true}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide className="slide" key={index}>
          <div className="slide-container">
            <h2 className="title">{project.title}</h2>
            <br></br>
            <h2>{project.techStack} </h2>
            <br></br>
            <div>
              <img
                className="Image"
                src={project.image}
                alt="developer-portfolio-image"
              />
            </div>
            <p className="blurb">{project.desc}</p>
            <br></br>
            <div className="links">
              <a href={project.repo} className="github-link">
                See Github Code
              </a>
              <a href={project.deployedLink} className="github-link">
                See Deployed Code
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}{' '}
    </Swiper>
  )
  // return (
  //   <div className="slides-container">
  //     <div className="slide">
  //       <h2 className="title">Personal Portfolio</h2>
  //       <br></br>
  //       <h2>HTML || Javascript || Sass || CSS || React </h2>
  //       <br></br>
  //       <div>
  //         <img
  //           className="Image"
  //           src={PortfolioImage}
  //           alt="developer-portfolio-image"
  //         />
  //       </div>
  //       <p className="blurb">
  //         The motivation for this project was to create a dynamic, deployed
  //         portfolio for potential clients and future employers to peruse my
  //         skills in flexbox, media queries, and CSS variables through various
  //         sample projects. I solved the criteria of this potential employer by
  //         providing said portfolio, with a recent photo and examples of previous
  //         work. When clicking through the site, the UI scrolls to the
  //         corresponding sections, with titled images and responsive website
  //         design.
  //       </p>
  //       <br></br>
  //       <div className="links">
  //         <a
  //           href="https://github.com/ElsieMay/react-portfolio"
  //           className="github-link"
  //         >
  //           See Github Code
  //         </a>
  //         <a
  //           href="https://elsiemay.github.io/react-portfolio/"
  //           className="github-link"
  //         >
  //           See Deployed Code
  //         </a>
  //       </div>
  //     </div>
  //     <div className="slide">
  //       <h2 className="title">Server Side API</h2>
  //       <br></br>
  //       <h2>HTML || Javascript || CSS || OpenWeather One Call API </h2>
  //       <br></br>
  //       <div>
  //         <img
  //           className="Image"
  //           src={WeatherDashboardImage}
  //           alt="developer-portfolio-image"
  //         />
  //       </div>
  //       <p className="blurb">
  //         The motivation for this project was to build a weather dashboard that
  //         will run in the browser and feature dynamically updated HTML and CSS.
  //         The dashboard uses the OpenWeather One Call API to retrieve weather
  //         data for cities. I learnt about using API's to retrieve information,
  //         API keys, Javascript functions, event handlers and algorithms, CSS,
  //         HTML, local storage, and much more.
  //       </p>
  //       <br></br>
  //       <div className="links">
  //         <a
  //           href="https://github.com/ElsieMay/06_Homework_Server_side_APIs_Weather_Dashboard"
  //           className="github-link"
  //         >
  //           See Github Code
  //         </a>
  //         <a
  //           href="https://elsiemay.github.io/06_Homework_Server_side_APIs_Weather_Dashboard/"
  //           className="github-link"
  //         >
  //           See Deployed Code
  //         </a>
  //       </div>
  //     </div>
  //     <div className="slide">
  //       <h2 className="title">Personal Portfolio</h2>
  //       <br></br>
  //       <h2>HTML || Javascript || Express.js || Mongo DB </h2>
  //       <br></br>
  //       <div>
  //         <source src={APIVideo} type="video/mp4" />
  //       </div>
  //       <p className="blurb">
  //         The motivation was to build an API for a social network web
  //         application where users can share their thoughts, react to friends’
  //         thoughts, and create a friend list. I built this API completely from
  //         scratch using Express.js for routing, a MongoDB database, and the
  //         Mongoose ODM. I learnt about using express js, Mongo DB, Mongoose ODM,
  //         insomnia, seeding databases, authentication, using schemas and much
  //         more.
  //       </p>
  //       <br></br>
  //       <div className="links">
  //         <a
  //           href="https://github.com/ElsieMay/06_Homework_Server_side_APIs_Weather_Dashboard"
  //           className="github-link"
  //         >
  //           See Github Code
  //         </a>
  //         <a
  //           href="https://elsiemay.github.io/06_Homework_Server_side_APIs_Weather_Dashboard/"
  //           className="github-link"
  //         >
  //           See Deployed Code
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // )
}
// exports layout function
export default Project
