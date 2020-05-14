import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'Header'
import NewHome from 'NewHome'
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
        let next = [...prevState, lastId + 1]
        localStorage.setItem('vehicles', JSON.stringify(next))
        return next
      })
    }
  }

  const remove = () => {
    if (vehicleIds.length > 1) {
      setVehicleIds(prevState => {
        const next = [...prevState]
        next.pop()
        localStorage.setItem('vehicles', JSON.stringify(next))
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

  useEffect(() => {
    const vehicles = localStorage.getItem('vehicles')
    if (vehicles && vehicles.length > 0) {
      setVehicleIds(JSON.parse(vehicles))
    }
  }, [])

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
            <NewHome />
            {/* <Home
              vehicleIds={vehicleIds}
              currentPackage={currentPackage}
              setCurrentPackage={setCurrentPackage}
              changePackage={changePackage}
              priceLoading={priceLoading}
            /> */}
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
