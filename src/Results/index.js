import React, { useState } from 'react'
import classNames from 'classnames'
import Price from 'Price'
import Button from 'Button'
import Picker from 'Picker'
import Coverage from 'Coverage'

import './style.scss'

const Results = () => {

  const [buyNow, setBuyNow] = useState(false)

  const congratsCls = classNames('Congrats', {
    'hidden': buyNow, 
  })

  const buyHandler = () => setBuyNow(prevState => !prevState)

  return (
    <div className="Results">
      <div className="container text-center">
        <div className={congratsCls}>
          <h1>Congratulations!</h1>
          <h2>Here's your <span>Costco Recommended</span> insurance package</h2>
        </div>
        <Price loading={true} />
        <Button className={buyNow ? 'BuyNow active' : 'BuyNow'} onClick={buyHandler}>
          {buyNow ? 'Modify Coverage' : 'Buy Now'}
        </Button>
        <div className={buyNow ? 'BuyOptions active' : 'BuyOptions'}>
          <div className="Calls">
            <Button className="Proceed" to="/online">
              <small>Proceed</small>
              <p>Online</p>
            </Button>
            <span className="Or">OR</span>
            <Button className="Proceed" to="/offline">
              <small>Have Us</small>
              <p>Call You</p>
            </Button>
          </div>
          <small>
            If you choose by phone, we will call you within 24 hours
          </small>
        </div>
        <Picker Faded={buyNow} />
        <Coverage Faded={buyNow} />
      </div>
    </div>
  )
}

export default Results