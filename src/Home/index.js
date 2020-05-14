import React, { useState } from 'react'
import Price from 'Price'
import Picker from 'Picker'
import Button from 'Button'
import CoverageRow from 'CoverageRow'
import SingleVehicle from 'SingleVehicle'
import useVehicles from 'useVehicles'

import './style.scss'

const Home = ({ vehicleIds, currentPackage, setCurrentPackage, changePackage, priceLoading }) => {

  const { vehicles } = useVehicles(vehicleIds, currentPackage)

  const [visibleVehicle, setVisibleVehicle] = useState(1)
  const [buying, setBuying] = useState(false)

  const handleClick = () => setBuying(prevState => !prevState)

  const changeVehicle = e => {
    setVisibleVehicle(Number(e.target.value))
  }

  return (
    <div className="Home">
      <div className={buying ? 'Congrats Buying text-center' : 'Congrats text-center'}>
        <h1>Congratulations!</h1>
        <h2>Here's your <span>Costco Recommended</span> insurance package</h2>
      </div>
      <div className="PriceWrapper">
        <Price />
        <Button onClick={handleClick} className={buying ? 'BuyNow Disabled' : 'BuyNow'}>
          BUY
          <span>NOW</span>
        </Button>
      </div>
      <div className={buying ? 'BuyOptions Active' : 'BuyOptions'}>
        <Button to="/online">
          <small>Buy</small>
          <span>Online</span>
        </Button>
        <span>OR</span>
        <Button to="/offline">
          <small>Have Us</small>
          <span>Call You</span>
        </Button>
        <div className="PhoneCopy">
          <small>If you choose by phone, we will call you within 24 hours. If you need a faster response, you can call us at 1-800-123-4567.</small>
        </div>
      </div>
      <div className={buying ? 'Coverage Faded' : 'Coverage'}>
        <Picker
          currentPackage={currentPackage}
          setCurrentPackage={setCurrentPackage}
          changePackage={changePackage}
          priceLoading={priceLoading}
        />
        {vehicles.length > 1 ? (
          <div className="VehiclePicker Select">
            <select onChange={changeVehicle}>
              {vehicles.map(v =>
                <option key={v.id} value={v.id}>
                  {v.year} {v.make} {v.model}
                </option>
              )}
            </select>
          </div>
        ) : (
          <div className="VehiclePicker">
              {vehicles[0].year} {vehicles[0].make} {vehicles[0].model}
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
      {/* <div>
        <table id="CovTable">
          <tbody>
            <tr>
              <th></th>
              <th>Liability</th>
              <th>Comprehensive Coverage</th>
              <th>Collision Coverage</th>
              <th>Standard Benefits</th>
              <th>Damage to Non-Owner Autos</th>
              <th>Depreciation Waiver</th>
              <th>Accident Waiver</th>
              <th>Transportation Relacement</th>
              <th>Restriction of Glass Coverage</th>
            </tr>
            {vehicles.map(v =>
              <CoverageRow
                key={v.id}
                vehicle={v}
                currentPackage={currentPackage}
              />
            )}
          </tbody>
        </table>
      </div> */}
      {buying &&
        <Button className="Cancel" onClick={() => setBuying(false)}>
          Go back and<br />Modify Coverage
        </Button>
      }
    </div>
  )
}

export default Home