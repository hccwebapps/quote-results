import React from 'react'

import './style.scss'

const LoadingSpinner = ({ Simple }) => {
  return (
    <div className={Simple ? 'LoadingSpinner Simple clearfix' : 'LoadingSpinner clearfix'}>
      <div className="loader-holder">
        <div className="loader" />
      </div>
      <h4>Fetching your <br />updated price</h4>
    </div>
  )
}

export default LoadingSpinner