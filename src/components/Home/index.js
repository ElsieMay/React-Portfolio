import Logo from '../../assets/images/EL-LOGO.png'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-area">
        <h1>
          Hi, <br /> I'm
        </h1>
        <img src={Logo} alt="developername" />
      </div>
    </div>
  )
}

export default Home
