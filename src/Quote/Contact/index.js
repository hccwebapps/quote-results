import React, { useContext } from 'react'
import { QuoteContext } from 'Quote'

const Contact = () => {

  const { contact } = useContext(QuoteContext)

  return (
    <div className="Contact BuildBlock">
      <strong className="titlecase">{contact.your_name}</strong><br />
      <span>{contact.email_address}</span><br />
      <span className="uppercase">{contact.postal_code}</span><br />
    </div>
  )
}

export default Contact