import React from 'react'

import './style.scss'

const Choice = () => {
  return (
    <div className="Choice">
      <span>You've made a</span>
      <h3>great choice!</h3>
      {/* <div className="Carrier">
        <img src={process.env.PUBLIC_URL + '/img/zenith.jpg'} alt="Carrier" />
      </div> */}
    </div>
  )
}

export default Choice