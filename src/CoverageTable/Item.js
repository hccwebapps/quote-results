import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { valueCopy, booleanCopy } from 'copy'

const Item = ({ name, value, isBoolean }) => {

  const [changed, setChanged] = useState(false)

  const cls = classNames('Item', {
    'Updated': changed,
    'Boolean': isBoolean,
  })

  useEffect(() => {
    setChanged(true)
    setTimeout(() => {
      setChanged(false)
    }, 2000)
  }, [value])

  return (
    <div className={cls}>
      {isBoolean ? (
        value ?
          <span>{booleanCopy[name].title}</span> :
          <strike>{booleanCopy[name].title}</strike>
      ) : (
        <span>{valueCopy[name].title} {value}</span>
      )}
    </div>
  )
}

export default Item