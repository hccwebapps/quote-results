import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import Button from 'Button'
import { valueCopy, booleanCopy } from 'copy'

const Item = ({ name, value, isBoolean, setHelpItem, New }) => {

  const [changed, setChanged] = useState(false)

  const isDisabled = () => {
    if (name === 'waiver_depreciation') {
      if (!New) {
        return true
      }
    }
  }

  const cls = classNames('Item', {
    'Updated': changed,
    'Boolean': isBoolean,
    'Disabled': isDisabled(),
  })

  useEffect(() => {
    setChanged(true)
    setTimeout(() => {
      setChanged(false)
    }, 2000)
  }, [value])

  if (isDisabled()) {
    return (
      <div className={cls}>
        <span>Depreciation waiver <i>+</i></span>
        <small>Older vehicles not eligible</small>
      </div>
    )
  }

  return (
    <div className={cls}>
      {!isBoolean && <Button onClick={() => setHelpItem(name)}>?</Button>}
      {isBoolean ? (
        value ?
          <span>{booleanCopy[name].title}</span> :
          <strike>{booleanCopy[name].title}</strike>
      ) : (
        <span>
          <small>{valueCopy[name].title}</small>
          <span>${value}</span>
        </span>
      )}
      {isBoolean && <Button onClick={() => setHelpItem(name)}>?</Button>}
    </div>
  )
}

export default Item