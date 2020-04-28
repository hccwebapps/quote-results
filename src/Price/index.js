import React, { useContext } from 'react'
import LoadingSpinner from 'LoadingSpinner'
import { AppContext } from 'App'

import './style.scss'

const Price = () => {

  const { priceLoading, currentCoverage } = useContext(AppContext)

  const prices = {
    'good': {
      month: '127',
      year: '1407',
      bundle: '117',
    },
    'better': {
      month: '137',
      year: '1691',
      bundle: '121',
    },
    'best': {
      month: '168',
      year: '1832',
      bundle: '153',
    }
  }

  return (
    <div className="Price">
      {priceLoading ? <LoadingSpinner /> : (
        <div>
          <div className = "BasePrice">
            <span className = "DollarSign">$</span>
            <span className="Amount">
              {prices[currentCoverage].month}
            </span>
          </div >
          <div className="PriceBreakdown text-left">
            Per month, <strong>${prices[currentCoverage].year}</strong> per year<br />
            <strong>${prices[currentCoverage].bundle}</strong> per month as part of a bundle
          </div>
        </div>
      )}
    </div>
  )
}

export default Price