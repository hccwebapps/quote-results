import React, { useState } from 'react'
import Price from 'Price'
import Picker from 'Picker'
import Button from 'Button'
import SingleVehicle from 'SingleVehicle'
import useVehicles from 'useVehicles'

import './style.scss'

const Home = ({ vehicleIds, currentPackage, setCurrentPackage }) => {

  const { vehicles } = useVehicles(vehicleIds, currentPackage)

  const [visibleVehicle, setVisibleVehicle] = useState(1)

  return (
    <div className="Home">
      <div className="Congrats text-center">
        <h1>Congratulations!</h1>
        <h2>Here's your <span>Costco Recommended</span> insurance package</h2>
      </div>
      <Price />
      <Button onClick={() => console.log('click')} className="BuyNow">
        BUY
        <span>NOW</span>
      </Button>
      <div className="Coverage">
        <Picker
          currentPackage={currentPackage}
          setCurrentPackage={setCurrentPackage}
        />
        {vehicles.length > 1 ? (
          <select className="VehiclePicker">
            {vehicles.map(v =>
              <option key={v.id} value={v.id}>
                {v.make} {v.model}
              </option>
            )}
          </select>
        ) : (
          <div className="VehiclePicker">
            {vehicles[0].make} {vehicles[0].model}
          </div>
        )}
        {vehicles.map(v =>
          <SingleVehicle
            key={v.id}
            vehicle={v}
            currentPackage={currentPackage}
            visibleVehicle={visibleVehicle}
          />
        )}
      </div>
    </div>
  )
}

export default Home