import React from 'react'
import { useHistory } from 'react-router-dom'
import Price from 'Price'
import Choice from 'Choice'
import ContactForm from 'ContactForm'

import './style.scss'

const ApplyOffline = () => {

  let history = useHistory()

  const submit = e => {
    e.preventDefault()
    history.push("/offline-received")
  }

  return (
    <div>
      <Price Simple />
      <ContactForm submit={submit} />
      <Choice />
    </div>
  )
}

export default ApplyOffline