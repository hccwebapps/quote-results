import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'Header'
import Home from 'Home'
import ApplyOnline from 'ApplyOnline'
import ApplyOffline from 'ApplyOffline'
import OntarioBenefits from 'OntarioBenefits'

import './forms.scss'

export const AppContext = React.createContext()

const App = () => {

  const [vehicleIds, setVehicleIds] = useState([1])
  const [priceLoading, setPriceLoading] = useState(false)
  const [currentPackage, setCurrentPackage] = useState('recommended')

  const add = () => {
    if (vehicleIds.length < 4) {
      const lastId = Math.max(...vehicleIds)
      setVehicleIds(prevState => {
        return [
          ...prevState,
          lastId + 1,
        ]
      })
    }
  }

  const remove = () => {
    if (vehicleIds.length > 1) {
      setVehicleIds(prevState => {
        const next = [...prevState]
        next.pop()
        return next
      })
    }
  }

  const changePackage = nextPackage => {
    setPriceLoading(true)
    setCurrentPackage(nextPackage)
    setTimeout(() => {
      setPriceLoading(false)
    }, 2000)
  }

  return (
    <AppContext.Provider value={{
      priceLoading,
      setPriceLoading,
      currentPackage,
      setCurrentPackage,
      changePackage,
    }}>
      <div className="App container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              vehicleIds={vehicleIds}
              currentPackage={currentPackage}
              setCurrentPackage={setCurrentPackage}
              changePackage={changePackage}
              priceLoading={priceLoading}
            />
          </Route>
          <Route path="/online">
            <ApplyOnline />
          </Route>
          <Route path="/offline">
            <ApplyOffline />
          </Route>
          <Route path="/ontario-benefits">
            <OntarioBenefits />
          </Route>
        </Switch>
      </div>
      <div className="AddRemoveVehicles">
        <div>
          <button onClick={remove}>-</button><button onClick={add}>+</button>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
