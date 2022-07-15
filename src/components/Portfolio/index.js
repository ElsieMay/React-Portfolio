import './style.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import PortfolioImg from '../../assets/images/Screen Shot 2022-07-14 at 1.35.15 pm.jpg'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  return (
    (
      <div className="css-cards">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
      </div>
    ),
    (
      <div className="app">
        <div className="cardList">
          <button className="cardList_btn btn btn--left">
            <div className="icon">
              <svg>
                <use xlinkHref="arrow-left"></use>
              </svg>
            </div>
          </button>
          <div className="cards-wrapper">
            <div className="card current--card">
              <div className="card_image">
                {' '}
                <img
                  className="Image"
                  src={PortfolioImg}
                  alt="portfolio-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
  // // Debug
  // const gui = new dat.GUI()
  // // Canvas
  // const canvas = document.querySelector('canvas.webgl')
  // // Scene
  // const scene = new THREE.Scene()
  // // Objects
  // const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
  // // Materials
  // const material = new THREE.MeshBasicMaterial()
  // material.color = new THREE.Color(0x525ed0)
  // // Mesh
  // const sphere = new THREE.Mesh(geometry, material)
  // scene.add(sphere)
  // // Lights
  // const pointLight = new THREE.PointLight(0xffffff, 0.1)
  // pointLight.position.x = 2
  // pointLight.position.y = 3
  // pointLight.position.z = 4
  // scene.add(pointLight)
  // /**
  //  * Sizes
  //  */
  // const sizes = {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // }
  // window.addEventListener('resize', () => {
  //   // Update sizes
  //   sizes.width = window.innerWidth
  //   sizes.height = window.innerHeight
  //   // Update camera
  //   camera.aspect = sizes.width / sizes.height
  //   camera.updateProjectionMatrix()
  //   // Update renderer
  //   renderer.setSize(sizes.width, sizes.height)
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // })
  // /**
  //  * Camera
  //  */
  // // Base camera
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   sizes.width / sizes.height,
  //   0.1,
  //   100
  // )
  // camera.position.x = 0
  // camera.position.y = 0
  // camera.position.z = 2
  // scene.add(camera)
  // // Controls
  // // const controls = new OrbitControls(camera, canvas)
  // // controls.enableDamping = true
  // /**
  //  * Renderer
  //  */
  // const renderer = new THREE.WebGLRenderer({
  //   canvas: canvas,
  // })
  // renderer.setSize(sizes.width, sizes.height)
  // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // /**
  //  * Animate
  //  */
  // const clock = new THREE.Clock()
  // const tick = () => {
  //   const elapsedTime = clock.getElapsedTime()
  //   // Update objects
  //   sphere.rotation.y = 0.5 * elapsedTime
  //   // Update Orbital Controls
  //   // controls.update()
  //   // Render
  //   renderer.render(scene, camera)
  //   // Call tick again on the next frame
  //   window.requestAnimationFrame(tick)
  // }
  // tick()
}

export default Portfolio
