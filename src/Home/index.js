import React, { useState, useContext } from 'react'
import Price from 'Price'
import Picker from 'Picker'
import Button from 'Button'
import SingleVehicle from 'SingleVehicle'
import useVehicles from 'useVehicles'
import { AppContext } from 'App'

import './style.scss'

const Home = () => {

  const { prices, vehicleIds, currentPackage, setCurrentPackage, priceLoading, delta, setDelta } = useContext(AppContext)

  const { vehicles } = useVehicles(vehicleIds, currentPackage)

  const [visibleVehicle, setVisibleVehicle] = useState(1)
  const [buying, setBuying] = useState(false)
  const [helpActive, setHelpActive] = useState(false)

  const handleClick = () => setBuying(prevState => !prevState)

  const setPackageAndDelta = (pack, delta) => {
    setDelta(delta)
    setCurrentPackage(pack)
  }

  return (
    <div className="Home">
      <div className={buying ? 'Congrats Buying text-center' : 'Congrats text-center'}>
        <h1>Congratulations!</h1>
        <h2>Here's your <span>Costco Recommended</span> insurance package</h2>
      </div>
      <div className="PriceWrapper">
        <Price />
        <Button onClick={buying ? () => {} : handleClick} className={buying ? 'BuyNow Disabled' : 'BuyNow'}>
          <p>BUY<span>NOW</span></p>
        </Button>
      </div>
      <p className={buying ? 'MLD Buying text-center' : 'MLD text-center'}>You saved ${prices.saved} per month by selecting<br />the home and auto discount.</p>
      <div className={buying ? 'BuyOptions Active' : 'BuyOptions'}>
        <Button to="/online" className="Success">
          <small>Buy</small>
          <span>Online</span>
        </Button>
        <span>OR</span>
        <Button to="/offline" className="Success">
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
          priceLoading={priceLoading}
          setPackageAndDelta={setPackageAndDelta}
        />
        {/* {vehicles.length > 1 ? (
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
        )} */}
        {/* <p className="text-center" style={{ margin: '0 2rem 1rem' }}>
          <small>
            Your 2007 Ford Focus LX is not eligible for Waiver of Depreciation coverage since it is more than two years old.
          </small>
        </p> */}
        <p className="text-center" style={{ marginTop: '0' }}>
          <Button onClick={() => setHelpActive(!helpActive)} className="Small Rounded White">
            Coverage Details
          </Button>
        </p>
        {vehicles.map(v =>
          <SingleVehicle
            key={v.id}
            vehicle={v}
            currentPackage={currentPackage}
            visibleVehicle={visibleVehicle}
            helpActive={helpActive}
          />
        )}
      </div>
      {buying &&
        <Button className="Cancel" onClick={() => setBuying(false)}>
          Go back and<br />Modify Coverage
        </Button>
      }
    </div>
  )
}

export default Home