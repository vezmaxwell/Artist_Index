import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className="navbar navbar-expand-sm">

      <div className="container">
        {/*Logo*/}
        <div className="navbar-brand">
          <Link to="/"><i className="fas fa-record-vinyl"></i></Link>
        </div>
        {/* Nav Bar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/charts">View Charts</Link>
          </li>
        </ul>
      </div>
    </div>

  )
}
export default Navbar