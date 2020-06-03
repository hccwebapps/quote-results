import React from 'react'
import Price from 'Price'

import './style.scss'

const OfflineReceived = () => {
  return (
    <div className="OfflineReceived">
      <Price Final />
      <div className="text-center">
        <h2 className="text-primary">You're all set!</h2>
        <p>Thank you for submitting your information! We will contact you shortly. If you need to call us, our number is <a href="tel:1-866-967-7707">1-866-967-7707</a>.</p>
      </div>
    </div>
  )
}

export default OfflineReceived