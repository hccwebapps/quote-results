import React from 'react'
import classNames from 'classnames'

const PickerButton = ({ CoverageType, onClick, currentCoverage }) => {

  const cls = classNames('PickerButton', {
    'Active': currentCoverage === CoverageType,
    'Good': CoverageType === 'good',
    'Better': CoverageType === 'better',
    'Best': CoverageType === 'best',
  })

  const copy = () => {
    switch(CoverageType) {
      case 'good':
        return <small>Base<br /> Coverage</small>
      case 'better':
        return <small>Costco<br /> Recommended!</small>
      case 'best':
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