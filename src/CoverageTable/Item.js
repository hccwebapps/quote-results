import React, { useState, useContext, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { valueCopy, booleanCopy } from 'copy'
import { AppContext } from 'App'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Item = ({ name, value, isBoolean, helpActive, New }) => {

  const previous = usePrevious({ value })

  const { delta } = useContext(AppContext)
  const [increaseOrDecrease, setIncreaseOrDecrease] = useState(null)

  const isDisabled = () => {
    if (isBoolean) {
      if (!value) {
        return true
      }
    }
  }

  const waiverDisabled = () => {
    if (name === 'waiver_depreciation') {
      if (!New) {
        return true
      }
    }
  }

  const cls = classNames('Item', {
    'Boolean': isBoolean,
    'Liability': name === 'liability',
    'ValueItem': name === 'coverage_collision' || name === 'coverage_comprehensive',
    'NonLiability': name !== 'liability',
    'Disabled': isDisabled(),
    'WaiverDisabled': waiverDisabled(),
    'Increased': increaseOrDecrease === 'increased',
    'Decreased': increaseOrDecrease === 'decreased',
  })

  useEffect(() => {
    if (previous) {
      if (previous.value !== value) {
        if (delta === 'up') {
          setIncreaseOrDecrease('increased')
        } else {
          setIncreaseOrDecrease('decreased')
        }
      }
    }
    // setTimeout(() => {
    //   setIncreaseOrDecrease(null)
    // }, 3000)
  })

  return (
    <div className={cls}>
      {/* <div>
        <Button onClick={() => setHelpItem(name)}>?</Button>
      </div> */}
      {isBoolean ? (
        value ?
          <h4>{booleanCopy[name].title}</h4> :
          <h4 className= "CovLabel"><strike>{booleanCopy[name].title}</strike></h4>
      ) : (
        <div>
          <strong>${value}</strong>
          <h4 className="CovLabel">{valueCopy[name].title}</h4>
        </div>
      )}
      {name === 'waiver_depreciation' && (
        <div className="Ineligible">
          <span>2020 Ford Focus SE</span>
          <span>2007 Honda Fit LX (ineligible due to vehicle age)</span>
        </div>
      )}
      <small className={helpActive ? 'HelpCopy Active' : 'HelpCopy'}>
        {valueCopy[name] && valueCopy[name].help}
        {booleanCopy[name] && booleanCopy[name].help}
      </small>
    </div>
  )
}

export default Item