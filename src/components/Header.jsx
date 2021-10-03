import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav>
      <h3>Akshat P.</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
