import React, { useContext } from 'react'
import { QuoteContext } from 'Quote'
import Button from 'Button'

const Vehicles = () => {

  const { vehicles } = useContext(QuoteContext)

  return (
    <div className="Vehicles BuildBlock">
      {vehicles.length > 0 ? (
        <div>
          {vehicles.map(d =>
            <div>
              vehicle!
            </div>
          )}
        </div>
      ) : (
        <div>
          <Button to="/quote/build-quote/add-vehicle" className="Large Rounded">
            +
          </Button>
          <span>No Vehicles added yet</span>
        </div>
      )}
    </div>
  )
}

export default Vehicles