import React, { useContext } from 'react'
import CoverageItem from './CoverageItem'
import { coverage } from 'vars'
import { AppContext } from 'App'

import './style.scss'

const Coverage = ({ Faded }) => {

  const { currentCoverage } = useContext(AppContext)

  const covs = {
    'good': {
      liability: '1,000,000',
      comp: '1,000',
      coll: '1,000',
    },
    'better': {
      liability: '2,000,000',
      comp: '500',
      coll: '500',
    },
    'best': {
      liability: '2,000,000',
      comp: '500',
      coll: '500',
    }
  }

  return (
    <div className={Faded ? 'Coverage faded' : 'Coverage'}>
      <div className="DollarValues">
        <div className="third-col">
          <div className="DollarItem">
            <small>Liability<br />Limit</small>
            <span>${covs[currentCoverage].liability}</span>
          </div>
        </div>
        <div className="third-col">
          <div className="DollarItem">
            <small>Comprehensive<br />Coverage</small>
            <span>${covs[currentCoverage].comp}</span>
          </div>
        </div>
        <div className="third-col">
          <div className="DollarItem">
            <small>Collision<br />Coverage</small>
            <span>${covs[currentCoverage].coll}</span>
          </div>
        </div>
      </div>
      {coverage.map(c =>
        <CoverageItem
          key={c.id}
          cov={c}
        />
      )}
    </div>
  )
}

export default Coverage