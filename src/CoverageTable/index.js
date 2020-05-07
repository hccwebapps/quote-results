import React, { useState } from 'react'
import numeral from 'numeral'
import Item from './Item'
import { valueCopy, booleanCopy } from 'copy'
import './style.scss'

const CoverageTable = ({ valueCoverage, booleanCoverage, New }) => {

  const [helpItem, setHelpItem] = useState(null)

  const getHelp = name => {
    if (valueCopy[name]) {
      return valueCopy[name].help
    } else if (booleanCopy[name]) {
      return booleanCopy[name].help
    }
  }

  return (
    <div className="CoverageTable">
      <div className="ValueCovs">
        {Object.keys(valueCoverage).map(c =>
          <Item
            key={c}
            name={c}
            setHelpItem={setHelpItem}
            value={`${numeral(valueCoverage[c]).format('0,0')}`}
          />
        )}
      </div>
      <div className="BooleanCovs">
        {Object.keys(booleanCoverage).map(c =>
          <Item
            key={c}
            name={c}
            setHelpItem={setHelpItem}
            value={booleanCoverage[c]}
            isBoolean
            New={New}
          /> 
        )}
      </div>
      <div className="CovHelp">
        {helpItem ? (
          <div>
            {getHelp(helpItem)}
          </div>
        ) : (
          <div>
            This is your recommended insurance package.
          </div>
        )}
      </div>
    </div>
  )
}

export default CoverageTable