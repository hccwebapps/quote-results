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

  const cls = classNames('RowItem', {
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

  return isBoolean ? (
    <td className={cls}>
      {value ? <span className="Check">✔︎</span> : <span className="Cross">⨯</span>}
    </td>
  ) : (
    <td className={cls}>
      <span>${value}</span>
    </td>
  )
}

export default Item