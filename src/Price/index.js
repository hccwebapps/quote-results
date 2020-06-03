import React, { useContext } from 'react'
import LoadingSpinner from 'LoadingSpinner'
import { AppContext } from 'App'

import './style.scss'

const Price = ({ Simple }) => {

  const { prices, priceLoading, oabsChanged } = useContext(AppContext)

  return (
    <div className={Simple ? 'PriceSimple' : 'Price'}>
      {priceLoading ? (
        <LoadingSpinner Simple={Simple} />
      ) : oabsChanged ? (
        <div className="CoverageChanged">
          Please adjust your coverage and click recalculate at the bottom of the page
        </div>
      ) : (
        <div className = "clearfix">
          <div className = "Monthly">
            <div className = "Dollar">$</div>
            <div className="Amt">{prices.month}</div>
            <div className="Per">Per<br />month</div>
          </div >
          <div className="Yearly">
            <div className="Dollar">$</div>
            <div className="Amt">{prices.year}</div>
            <div className="Per">Per<br />year</div>
          </div>
        </div >
      )}
    </div>
  )
}

export default Price