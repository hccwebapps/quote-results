import React, { useContext } from 'react'
import LoadingSpinner from 'LoadingSpinner'
import { AppContext } from 'App'

import './style.scss'

const Price = () => {

  const { priceLoading, currentPackage } = useContext(AppContext)

  const prices = {
    'good': {
      month: '127',
      year: '1407',
      bundle: '117',
    },
    'recommended': {
      month: '137',
      year: '1691',
      bundle: '121',
    },
    'highest': {
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
              {prices[currentPackage].month}
            </span>
          </div >
          <div className="PriceBreakdown text-left">
            Per month, <strong>${prices[currentPackage].year}</strong> per year<br />
            <strong>${prices[currentPackage].bundle}</strong> per month as part of a bundle
          </div>
        </div>
      )}
    </div>
  )
}

export default Price