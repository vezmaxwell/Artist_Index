import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className="navbar navbar-expand-sm">

      <div className="container">
        {/*Logo*/}
        <div className="navbar-brand">
          <i className="fas fa-record-vinyl"></i>
        </div>
        {/* Nav Bar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
    </div>

  )
}
export default Navbar