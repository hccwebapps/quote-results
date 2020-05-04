import React from 'react'
import PickerButton from './PickerButton'

import './style.scss'

const Picker = ({ currentPackage, setCurrentPackage, packageSelected }) => {

  return (
    <div className={packageSelected ? 'Picker Faded' : 'Picker'}>
      <PickerButton
        onClick={() => setCurrentPackage('good')}
        currentPackage={currentPackage}
        CoverageType="good"
      />
      <PickerButton
        onClick={() => setCurrentPackage('recommended')}
        currentPackage={currentPackage}
        CoverageType="recommended"
      />
      <PickerButton
        onClick={() => setCurrentPackage('highest')}
        currentPackage={currentPackage}
        CoverageType="highest"
      />
    </div>
  )
}

export default Picker