import React, { useState } from 'react'
import useCoverage from 'useCoverage'
import CoverageTable from 'CoverageTable'

import './style.scss'

const SingleVehicle = ({ vehicle, currentPackage, visibleVehicle }) => {

  const { valueCoverage, booleanCoverage } = useCoverage(currentPackage)

  const isVisible = vehicle.id === visibleVehicle

  return (
    <div className={isVisible ? 'Vehicle Visible' : 'Vehicle'}>
      <CoverageTable
        valueCoverage={valueCoverage}
        booleanCoverage={booleanCoverage}
        New={vehicle.new}
      />
    </div>
  )
}

export default SingleVehicle