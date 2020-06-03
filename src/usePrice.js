import { useState, useEffect } from 'react'

const prices = {
  'good': {
    month: '127',
    year: '1407',
    bundle: '117',
    saved: '26',
  },
  'recommended': {
    month: '137',
    year: '1691',
    bundle: '121',
    saved: '34',
  },
  'highest': {
    month: '168',
    year: '1832',
    bundle: '153',
    saved: '47',
  }
}

const usePrice = (currentPackage) => {

  const [priceLoading, setPriceLoading] = useState(false)
  const [oabsChanged, setOabsChanged] = useState(false)

  useEffect(() => {
    setPriceLoading(true)
    setTimeout(() => {
      setPriceLoading(false)
    }, 2000)
  }, [currentPackage])

  return {
    priceLoading,
    setPriceLoading,
    oabsChanged,
    setOabsChanged,
    prices: prices[currentPackage]
  }
}

export default usePrice