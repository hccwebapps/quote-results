import React from 'react'
import useCoverage from 'useCoverage'
import CoverageTable from 'CoverageTable'

import './style.scss'

const SingleVehicle = ({ vehicle, currentPackage, visibleVehicle }) => {

  const { valueCoverage, booleanCoverage } = useCoverage(currentPackage)

  const isVisible = vehicle.id === visibleVehicle

  return (
    <div className={isVisible ? 'Vehicle Visible' : 'Vehicle'}>
      <div className="VehicleTitle">
        <span>{vehicle.year} {vehicle.make} {vehicle.model}</span>
      </div>
      <CoverageTable
        valueCoverage={valueCoverage}
        booleanCoverage={booleanCoverage}
        New={vehicle.new}
      />
    </div>
  )
}

export default SingleVehicle