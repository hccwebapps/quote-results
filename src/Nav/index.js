import React from 'react'

import './style.scss'

const Nav = () => {
  return (
    <div className="Nav">
      <a href="/">1</a>
      <a href="/">2</a>
      <a href="/">3</a>
      <a href="/" className="active">4</a>
      <a href="/">5</a>
    </div>
  )
}

export default Nav