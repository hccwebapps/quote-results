import React from 'react'
import Price from 'Price'
import Choice from 'Choice'
import ContactForm from 'ContactForm'

import './style.scss'

const ApplyOnline = () => {

  const submit = e => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div>
      <Price Simple />
      <ContactForm
        submit={submit}
        toLink="/ontario-benefits"
      />
      <Choice />
    </div>
  )
}

export default ApplyOnline