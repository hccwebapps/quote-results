import { useState, useEffect } from 'react'

const valueGood = {
  liability: '1000000',
  coverage_comprehensive: '500',
  coverage_collision: '500',
}

const valueRecommended = {
  liability: '2000000',
  coverage_comprehensive: '500',
  coverage_collision: '500',
}

const valueHighest = {
  liability: '2000000',
  coverage_comprehensive: '1000',
  coverage_collision: '1000',
}

const booleanGood = {
  standard_coverage: true,
  damage_non_owned: true,
  waiver_depreciation: true,
  accident_waiver: true,
  transportation_replacement: false,
  restriction_glass: false,
}

const booleanRecommended = {
  standard_coverage: true,
  damage_non_owned: true,
  waiver_depreciation: true,
  accident_waiver: true,
  transportation_replacement: false,
  restriction_glass: false,
}

const booleanHighest = {
  standard_coverage: true,
  damage_non_owned: true,
  waiver_depreciation: true,
  accident_waiver: true,
  transportation_replacement: true,
  restriction_glass: true,
}

const useCoverage = (currentPackage) => {

  const [valueCoverage, setValueCoverage] = useState(valueRecommended)
  const [booleanCoverage, setBooleanCoverage] = useState({
    standard_coverage: true,
    damage_non_owned: true,
    waiver_depreciation: true,
    accident_waiver: true,
    transportation_replacement: false,
    restriction_glass: false,
  })

  useEffect(() => {
    if (currentPackage === 'good') {
      setValueCoverage(valueGood)
      setBooleanCoverage(booleanGood)
    } else if (currentPackage === 'recommended') {
      setValueCoverage(valueRecommended)
      setBooleanCoverage(booleanRecommended)
    } else if (currentPackage === 'highest') {
      setValueCoverage(valueHighest)
      setBooleanCoverage(booleanHighest)
    }
  }, [currentPackage])

  return {
    valueCoverage,
    booleanCoverage,
  }
}

export default useCoverage