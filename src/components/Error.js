import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Error = () => {
  const history = useHistory()

  return (
    <div className="error-div">
      <h2>Oh! Something went wrong!</h2>
      <Link className="explore" to="/">Take Me Home, Country Roads...</Link> 
    </div> 
  )
}
export default Error

