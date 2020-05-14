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
        return <span>Base<br /> Coverage</span>
      case 'recommended':
        return <span>Costco<br /> Recommended!</span>
      case 'highest':
        return <span>Highest<br /> Coverage</span>
      default:
        return <span>No coverage type provided</span>
    }
  }

  return (
    <button className={cls} onClick={onClick}>
      {copy()}
    </button>
  )
}

export default PickerButton