import React from 'react'
import Button from 'Button'

const ContactForm = ({ submit, toLink }) => {
  return (
    <div>
      <form onSubmit={submit} className="ApplyOffline">
        <div className="clearfix">
          <div className="field half">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="Jane" />
          </div>
          <div className="field half">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Doe" />
          </div>
        </div>
        <div className="field">
          <label>Email Address</label>
          <input type="text" name="email" placeholder="your@email.com" />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input type="text" name="phone" placeholder="4161170100" />
        </div>
        <div className="text-center">
          {toLink ?
            <Button Submit to={toLink} className="Success">Continue</Button> :
            <Button Submit className="Success">Finish & Submit</Button>
          }
        </div>
      </form>
    </div>
  )
}

export default ContactForm