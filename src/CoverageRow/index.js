import React from 'react'
import numeral from 'numeral'
import Item from './Item'
import useCoverage from 'useCoverage'
import { valueCopy, booleanCopy } from 'copy'

import './style.scss'

const CoverageRow = ({ vehicle, currentPackage }) => {

  const { valueCoverage, booleanCoverage } = useCoverage(currentPackage)
  
  return (
    <tr className="CoverageRow">
      <td>{vehicle.make} {vehicle.model}</td>
      {Object.keys(valueCoverage).map(c =>
        <Item
          key={c}
          name={c}
          value={`${numeral(valueCoverage[c]).format('0,0')}`}
        />
      )}
      {Object.keys(booleanCoverage).map(c =>
        <Item
          key={c}
          name={c}
          value={booleanCoverage[c]}
          isBoolean
        />
      )}
    </tr>
  )
}

export default CoverageRow