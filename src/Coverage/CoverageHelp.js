import React from 'react'

const help = {
  standard_coverage: 'Some help copy for standard benefits, it will explain what standard benefits are and how they apply to your coverage.',
  damage_non_owned: 'Some help copy for damage to non-owned autos, it will explain what standard benefits are and how they apply to your coverage.',
  waiver_depreciation: 'Some help copy for waiver depreciation, it will explain what standard benefits are and how they apply to your coverage.',
  accident_waiver: 'Some help copy for accident waiver, it will explain what standard benefits are and how they apply to your coverage.',
  transportation_replacement: 'Some help copy for transportation replacement, it will explain what standard benefits are and how they apply to your coverage.',
  restriction_glass: 'Some help copy for restriction of glass coverage, it will explain what standard benefits are and how they apply to your coverage.',
}

const CoverageHelp = ({ Faded, helpSelected }) => {

  return (
    <div className={Faded ? 'CoverageHelp Faded' : 'CoverageHelp'}>
      {helpSelected ? (
        <small>{help[helpSelected]}</small>
      ) : (
        <small>This is your coverage for VEHICLE_NAME. You can change your coverage by clicking the options above.</small>
      )}
    </div>
  )
}

export default CoverageHelp