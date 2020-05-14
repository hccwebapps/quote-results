import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Button from 'Button'
import { valueCopy, booleanCopy } from 'copy'

const Item = ({ name, value, isBoolean, setHelpItem, New }) => {

  const [changed, setChanged] = useState(false)

  const isDisabled = () => {
    if (isBoolean) {
      if (!value) {
        return true
      }
    }
  }

  const cls = classNames('Item', {
    'Updated': changed,
    'Boolean': isBoolean,
    'Liability': name === 'liability',
    'ValueItem': name === 'coverage_collision' || name === 'coverage_comprehensive',
    'NonLiability': name !== 'liability',
    'Disabled': isDisabled(),
  })

  useEffect(() => {
    setChanged(true)
    setTimeout(() => {
      setChanged(false)
    }, 2000)
  }, [value])

  if (name === 'liability') {
    return (
      <div className={cls}>
        <strong>${value} Liability Limit</strong> <Button onClick={() => setHelpItem(name)}>?</Button>
      </div>
    )
  }

  return (
    <div className={cls}>
      <div>
        <Button onClick={() => setHelpItem(name)}>?</Button>
      </div>
      {isBoolean ? (
        value ?
          <p className="CovLabel">{booleanCopy[name].title}</p> :
          <p className= "CovLabel"><strike>{booleanCopy[name].title}</strike></p>
      ) : (
        <div>
          <p className="CovLabel">{valueCopy[name].title}</p>
          <strong>${value}</strong>
        </div>
      )}
    </div>
  )
}

export default Item