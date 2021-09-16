import React from 'react'
import { Link } from 'react-router-dom'
import recordplayer from '../images/recordplayergif.gif'

const Home = () => {
  return (
    <>
      <div className="container">
        <img className="record-player"src={recordplayer}/>
        <div className="home-page-title">
          
          <h1 className="display-4">
          ArtistIndex
          </h1>
          <p className="lead">A catalogue of Artists from across the globe!</p>
          <Link to="/search" className="explore">Explore Artists!</Link>
        </div>
      


      </div>
      {/* <footer className="home-footer">
        <hr />
        <p className="footer-text">&copy; Vez &amp; Dan 2021</p>
      </footer> */}
    </>
  )
}
export default Home