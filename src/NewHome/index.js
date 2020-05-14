import React from 'react'
import Price from 'Price'

import './style.scss'

const NewHome = () => {
  return (
    <div>
      <Price />
      <ul className="CoverageList">
        <li>
          <h5>Liability</h5>
          <p>Coverage for you in the event of a serious car accident.</p>
          <span>$1,000,000</span>
        </li>
        <li>
          <h5>Collision<br />Deductible</h5>
          <p>The amount you pay for repairs in the event of an accident.</p>
          <span>$500</span>
        </li>
        <li>
          <h5>Comprehensive Coverage</h5>
          <p>The amount you pay for repairs in the event of an accident.</p>
        </li>
        <li>Item Three</li>
        <li>Item Four</li>
        <li>Item Five</li>
        <li>Item Six</li>
        <li>Item Seven</li>
        <li>Item Eight</li>
      </ul>
    </div>
  )
}

export default NewHome