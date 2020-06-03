import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import Form from 'Quote/forms/Form'
import Text from 'Quote/forms/Text'
import Select from 'Quote/forms/Select'
import Build from 'Quote/Build'
import AddItem from 'Quote/AddItem'

import './style.scss'

export const QuoteContext = React.createContext()

const years = [['2020', '2020'], ['2019', '2019']]
const makes = [
  ['acura', 'Acura'],
  ['audi', 'Audi'],
  ['honda', 'Honda'],
  ['ford', 'Ford'],
  ['tesla', 'Tesla'],
]
const models = [
  ['focuslx', 'Focus LX'],
  ['fitdx', 'Fit DX'],
  ['fiestamx', 'Fiesta MX'],
]

const Quote = () => {

  let match = useRouteMatch()
  let history = useHistory()

  const [loading, setLoading] = useState(true)
  const [contact, setContact] = useState({})
  const [vehicles, setVehicles] = useState([])
  const [drivers, setDrivers] = useState([])

  const state = { contact, setContact, vehicles, setVehicles, drivers, setDrivers }

  const handleSubmit = (e, data) => {
    e.preventDefault()
    localStorage.setItem('contact', JSON.stringify(data))
    history.push('/quote/build-quote')
  }

  useEffect(() => {
    const contact = localStorage.getItem('contact')
    if (contact) setContact(JSON.parse(contact))
    setLoading(false)
  }, [])

  return (
    <QuoteContext.Provider value={state}>
      {loading ? 'loading...' : (
        <Switch>
          <Route path={`${match.url}/get-started`}>
            <div className="GetStarted">
              <Form onSubmit={handleSubmit} DefaultValues={contact} SubmitLabel="Start Quote">
                <Text
                  name="postal_code"
                  label="Postal Code"
                  helpCopy="We need your postal code to determine the best providers for your region"
                />
                <Text
                  name="your_name"
                  label="Your Name"
                />
                <Text
                  name="email_address"
                  label="Email Address"
                  helpCopy="We use this to save your quote should you need to revisit later"
                />
                <Text
                  name="licence_number"
                  label="Driver Licence Number"
                  helpCopy="Optional, but providing this will speed things up by allowing us to look up your information"
                />
              </Form>
            </div>
          </Route>
          <Route path={`${match.url}/build-quote/add-driver`}>
            <AddItem type="driver" set={setDrivers}>
              <Text name="first_name" />
              <Text name="last_name" />
            </AddItem>
          </Route>
          <Route path={`${match.url}/build-quote/add-vehicle`}>
            <AddItem type="vehicle" set={setVehicles}>
              <Select
                name="year"
                label="Year"
                choices={years}
                Third
              />
              <Select
                name="make"
                label="Make"
                choices={makes}
                Third
              />
              <Select
                name="model"
                label="Model"
                choices={models}
                Third
              />
            </AddItem>
          </Route>
          <Route path={`${match.url}/build-quote`}>
            <Build />
        </Route>
        </Switch>
      )}
    </QuoteContext.Provider>
  )
}

export default Quote