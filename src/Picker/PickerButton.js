import React from 'react'
import classNames from 'classnames'

const PickerButton = ({ CoverageType, onClick, currentPackage }) => {

  const cls = classNames('PickerButton', {
    'Active': currentPackage === CoverageType,
    'Good': CoverageType === 'good',
    'Better': CoverageType === 'recommended',
    'Best': CoverageType === 'highest',
  })

  const copy = () => {
    switch(CoverageType) {
      case 'good':
        return <small>Base<br /> Coverage</small>
      case 'recommended':
        return <small>Costco<br /> Recommended!</small>
      case 'highest':
        return <small>Highest<br /> Coverage</small>
      default:
        return <small>No coverage type provided</small>
    }
  }

  return (
    <button className={cls} onClick={onClick}>
      {copy()}
    </button>
  )
}

export default PickerButton