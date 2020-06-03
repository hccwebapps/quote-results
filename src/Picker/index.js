import React from 'react'
import PickerButton from './PickerButton'

import './style.scss'

const Picker = ({ currentPackage, setPackageAndDelta }) => {

  const setNext = pack => {
    if (currentPackage === 'good') {
      setPackageAndDelta(pack, 'up')
    } else if (currentPackage === 'highest') {
      setPackageAndDelta(pack, 'down')
    } else if (currentPackage === 'recommended') {
      if (pack === 'good') {
        setPackageAndDelta(pack, 'down')
      } else {
        setPackageAndDelta(pack, 'up')
      }
    }
  }

  return (
    <div className={'Picker'}>
      <PickerButton
        onClick={() => setNext('good')}
        currentPackage={currentPackage}
        CoverageType="good"
      />
      <PickerButton
        onClick={() => setNext('recommended')}
        currentPackage={currentPackage}
        CoverageType="recommended"
      />
      <PickerButton
        onClick={() => setNext('highest')}
        currentPackage={currentPackage}
        CoverageType="highest"
      />
    </div>
  )
}

export default Picker