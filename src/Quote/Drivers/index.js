import React, { useContext } from 'react'
import { QuoteContext } from 'Quote'
import Button from 'Button'

const Drivers = () => {

  const { drivers } = useContext(QuoteContext)

  return (
    <div className="Drivers BuildBlock">
      {drivers.length > 0 ? (
        <div>
          {drivers.map(d =>
            <div>
              driver!
            </div> 
          )}
        </div>
      ) : (
        <div>
          <Button to="/quote/build-quote/add-driver" className="Large Rounded">
            +  
          </Button>
          <span>No drivers added yet</span>
        </div>
      )}
    </div>
  )
}

export default Drivers