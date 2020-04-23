import React from 'react'

import './style.scss'

const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner clearfix">
      <div className="loader-holder">
        <div className="loader" />
      </div>
      <h4>Fetching your new price...</h4>
    </div>
  )
}

export default LoadingSpinner