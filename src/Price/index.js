import React, { useContext } from 'react'
import LoadingSpinner from 'LoadingSpinner'
import { AppContext } from 'App'

import './style.scss'

const Price = ({ Simple }) => {

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

  return Simple ? (
    <div className="MiniPrice clearfix">
      <div className="BasePrice">
        <div className="Dollar">$</div>
        <div className="Amt">{prices[currentPackage].month}</div>
        <div className="Per">Per<br />month</div>
      </div>
      <div className="PriceBreakdown">
        <strong>${prices[currentPackage].year}</strong> per year, <strong>${prices[currentPackage].bundle}</strong> per month as part of a bundle
      </div>
    </div>
  ) : (
    <div className="Price">
      <div className="PriceDetail">
        {priceLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="BasePrice">
            <div className="Dollar">$</div>
            <div className="Amt">{prices[currentPackage].month}</div>
            <div className="Per">Per<br />month</div>
          </div>
        )}
        <div className="PriceBreakdown">
          {priceLoading ? (
            <div />
          ) : (
            <div>
              <div className="PerYear">
                <strong>${ prices[currentPackage].year }</strong> per year
              </div>
              <span className="BundlePrice">
                <strong>${prices[currentPackage].bundle}</strong> per month as part of a bundle
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Price