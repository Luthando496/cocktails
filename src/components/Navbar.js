import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link>
          <h1>Luthando Beverages</h1>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

        </ul>
      </div>

    </nav>
  )
}

export default Navbar
