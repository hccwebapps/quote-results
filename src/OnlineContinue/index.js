import React from 'react'
import Price from 'Price'
import Choice from 'Choice'
import Button from 'Button'

import './style.scss'

const OnlineContinue = () => {
  return (
    <div className="OnlineContinue">
      <Price Simple />
      <form>
        <div className="field">
          <label>Please confirm your Driver's Licence Number to continue</label>
          <input type="text" name="dln" placeholder="A-123456-7890-123" />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Button onClick={() => console.log('click')} className="Large Rounded">Continue</Button>
        </div>
      </form>
      <Choice />
    </div>
  )
}

export default OnlineContinue