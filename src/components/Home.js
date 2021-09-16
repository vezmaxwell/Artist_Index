import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="home-page-title">
        <h1 className="display-4">
          ArtistIndex
        </h1>
        <p className="lead">A catalogue of Artists from across the globe! View top trending Charts!</p>
        <Link to="/search" className="explore">Explore Artists!</Link>
      </div>
    </div>
  )
}
export default Home