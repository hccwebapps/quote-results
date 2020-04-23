import React from 'react'
import Price from 'Price'
import Button from 'Button'
import Picker from 'Picker'
import Coverage from 'Coverage'

import './style.scss'

const Results = () => {
  return (
    <div className="Results">
      <div className="container">
        <h3 className="text-center">Congratulations - here's your Costco Recommended quote!</h3>
        <Price loading={true} />
        <Button className="BuyNow">
          Buy Now
        </Button>
        <Picker />
        <Coverage />
      </div>
    </div>
  )
}

export default Results