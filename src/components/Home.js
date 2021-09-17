import React from 'react'
import { Link } from 'react-router-dom'
import recordplayer from '../images/recordplayergif.gif'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-page-title">
          <img className="record-player"src={recordplayer}/>
          <h1 className="display-4">
          ArtistIndex
          </h1>
          <p className="lead">A catalogue of artists from across the globe!</p>
          <Link to="/search" className="explore">Explore Artists!</Link>
        </div>
      </div>
    </>
  )
}
export default Home