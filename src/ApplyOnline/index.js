import React from 'react'
import Price from 'Price'
import Choice from 'Choice'
import Button from 'Button'

import './style.scss'

const ApplyOnline = () => {
  return (
    <div className="container">
      <Price />
      <div className="text-center ApplyOnline">
        <p>In order to apply online, please<br />make sure you have your credit card ready.</p>
        <Button to="/" className="Large Rounded">
          Begin
        </Button>
      </div>
      <Choice />
    </div>
  )
}

export default ApplyOnline