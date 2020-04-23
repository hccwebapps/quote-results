import React from 'react'
import Nav from 'Nav'

import './style.scss'

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="clearfix">
          <img className="inova" src={process.env.PUBLIC_URL + '/img/inova-logo.png'} alt="Inova" />
          <img className="costco" src={process.env.PUBLIC_URL + '/img/costco-logo.png'} alt="Costco" />
        </div>
      </div>
      <Nav />
    </div>
  )
}

export default Header