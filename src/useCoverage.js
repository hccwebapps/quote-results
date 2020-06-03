import { useState, useEffect } from 'react'

const valueGood = {
  liability: '1000000',
  coverage_comprehensive: '1000',
  coverage_collision: '1000',
  transportation_replacement: '1200',
  damage_non_owned: '50000',
}

const valueRecommended = {
  liability: '2000000',
  coverage_comprehensive: '1000',
  coverage_collision: '1000',
  transportation_replacement: '1200',
  damage_non_owned: '50000',
}

const valueHighest = {
  liability: '2000000',
  coverage_comprehensive: '500',
  coverage_collision: '500',
  transportation_replacement: '1200',
  damage_non_owned: '50000',
}

const booleanGood = {
  waiver_depreciation: false,
  accident_waiver: false,
}

const booleanRecommended = {
  waiver_depreciation: true,
  accident_waiver: true,
}

const booleanHighest = {
  waiver_depreciation: true,
  accident_waiver: true,
}

const useCoverage = (currentPackage) => {

  const [valueCoverage, setValueCoverage] = useState(valueRecommended)
  const [booleanCoverage, setBooleanCoverage] = useState(booleanRecommended)

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