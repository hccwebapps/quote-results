import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'Header'
import Results from 'Results'
import ApplyOnline from 'ApplyOnline'
import ApplyOffline from 'ApplyOffline'

import './forms.scss'

export const AppContext = React.createContext()

function App() {

  const [activeCoverages, setActiveCoverages] = useState([1, 2, 3, 4])
  const [currentCoverage, setCurrentCoverage] = useState('better')
  const [priceLoading, setPriceLoading] = useState(false)

  const changeCoverage = (covs = [], activeCov = 'better') => {
    setPriceLoading(true)
    setCurrentCoverage(activeCov)
    setActiveCoverages(covs)
    setTimeout(function () {
      setPriceLoading(false)
    }, 2000)
  }

  return (
    <AppContext.Provider value={{
      activeCoverages,
      setActiveCoverages,
      currentCoverage,
      setCurrentCoverage,
      priceLoading,
      changeCoverage,
    }}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Results />
          </Route>
          <Route path="/online">
            <ApplyOnline />
          </Route>
          <Route path="/offline">
            <ApplyOffline />
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  )
}

export default App
