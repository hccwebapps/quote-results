import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'Nav'

import './style.scss'

const Header = () => {
  return (
    <div className="Header">
      <div className="clearfix">
        <Link to="/">
          <img className="inova" src={process.env.PUBLIC_URL + '/img/inova-logo.png'} alt="Inova" />
        </Link>
        <img className="costco" src={process.env.PUBLIC_URL + '/img/costco-logo.png'} alt="Costco" />
      </div>
      <Nav />
    </div>
  )
}

export default Header