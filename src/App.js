import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from 'Header'
import Home from 'Home'
import Modal from 'Modal'
import ApplyOnline from 'ApplyOnline'
import ApplyOffline from 'ApplyOffline'
import OntarioBenefits from 'OntarioBenefits'
import OfflineReceived from 'OfflineReceived'
import OnlineContinue from 'OnlineContinue'
import Quote from 'Quote'
import usePrice from 'usePrice'

import './forms.scss'

export const AppContext = React.createContext()

const App = () => {

  const [vehicleIds, setVehicleIds] = useState([1,2])
  const [currentPackage, setCurrentPackage] = useState('recommended')
  const [modalActive, setModalActive] = useState(false)
  const [delta, setDelta] = useState(null)

  const { prices, priceLoading, setPriceLoading, oabsChanged, setOabsChanged } = usePrice(currentPackage)

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

  useEffect(() => {
    const vehicles = localStorage.getItem('vehicles')
    if (vehicles && vehicles.length > 0) {
      setVehicleIds(JSON.parse(vehicles))
    }
  }, [])

  return (
    <AppContext.Provider value={{
      vehicleIds,
      prices,
      priceLoading,
      setPriceLoading,
      currentPackage,
      setCurrentPackage,
      oabsChanged,
      setOabsChanged,
      delta,
      setDelta,
    }}>
      <div className="App container">
        <Switch>
          <Route path="/quote">
            <Header />
          </Route>
          <Route path="/">
            <Header Full />
          </Route>
        </Switch>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/online">
            <ApplyOnline />
          </Route>
          <Route path="/offline">
            <ApplyOffline />
          </Route>
          <Route path="/ontario-benefits">
            <OntarioBenefits setModalActive={setModalActive} />
          </Route>
          <Route path="/offline-received">
            <OfflineReceived />
          </Route>
          <Route path="/online-continue">
            <OnlineContinue />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
      <div className="AddRemoveVehicles">
        <div>
          <button onClick={remove}>-</button><button onClick={add}>+</button>
        </div>
      </div>
      {modalActive && <Modal
        active={modalActive}
        setModalActive={setModalActive}
      />}
    </AppContext.Provider>
  )
}

export default App
