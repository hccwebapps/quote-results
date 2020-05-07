import React from 'react'
import PickerButton from './PickerButton'

import './style.scss'

const Picker = ({ currentPackage, setCurrentPackage, packageSelected, changePackage }) => {

  return (
    <div className={packageSelected ? 'Picker Faded' : 'Picker'}>
      <PickerButton
        onClick={() => changePackage('good')}
        currentPackage={currentPackage}
        CoverageType="good"
      />
      <PickerButton
        onClick={() => changePackage('recommended')}
        currentPackage={currentPackage}
        CoverageType="recommended"
      />
      <PickerButton
        onClick={() => changePackage('highest')}
        currentPackage={currentPackage}
        CoverageType="highest"
      />
    </div>
  )
}

export default Picker