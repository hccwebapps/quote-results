import React, { useContext } from 'react'
import PickerButton from './PickerButton'
import { AppContext } from 'App'

import './style.scss'

const Picker = () => {

  const { currentCoverage, changeCoverage } = useContext(AppContext)

  const set = (covs, type) => {
    changeCoverage(covs, type)
  }

  return (
    <div className="Picker">
      <hr />
      <PickerButton
        onClick={() => set([1, 2], 'good')}
        currentCoverage={currentCoverage}
        CoverageType="good"
      />
      <PickerButton
        onClick={() => set([1, 2, 3, 4], 'better')}
        currentCoverage={currentCoverage}
        CoverageType="better"
      />
      <PickerButton
        onClick={() => set([1, 2, 3, 4, 5, 6], 'best')}
        currentCoverage={currentCoverage}
        CoverageType="best"
      />
    </div>
  )
}

export default Picker