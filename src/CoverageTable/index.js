import React from 'react'
import numeral from 'numeral'
import Item from './Item'

import './style.scss'

const CoverageTable = ({ valueCoverage, booleanCoverage }) => {

  return (
    <div className="CoverageTable">
      <div className="ValueCovs">
        {Object.keys(valueCoverage).map(c =>
          <Item
            key={c}
            name={c}
            value={`${numeral(valueCoverage[c]).format('0,0')}`}
          />
        )}
      </div>
      <div className="BooleanCovs">
        {Object.keys(booleanCoverage).map(c =>
          <Item
            key={c}
            name={c}
            value={booleanCoverage[c]}
            isBoolean
          /> 
        )}
      </div>
    </div>
  )
}

export default CoverageTable