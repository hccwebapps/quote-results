import React from 'react'
import numeral from 'numeral'
import Item from './Item'
import './style.scss'

const CoverageTable = ({ valueCoverage, booleanCoverage, New, helpActive }) => {

  return (
    <div className="CoverageTable">
      {Object.keys(valueCoverage).map(c =>
        <Item
          key={c}
          name={c}
          value={`${numeral(valueCoverage[c]).format('0,0')}`}
          helpActive={helpActive}
        />
      )}
      {Object.keys(booleanCoverage).map(c =>
        <Item
          key={c}
          name={c}
          value={booleanCoverage[c]}
          isBoolean
          New={New}
          helpActive={helpActive}
        /> 
      )}
    </div>
  )
}

export default CoverageTable