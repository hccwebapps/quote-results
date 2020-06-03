import React from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'Quote/forms/Form'

const AddItem = ({ type, set, children }) => {

  const history = useHistory()

  const handleSubmit = (e, data) => {
    e.preventDefault()
    const keyName = type === 'vehicle' ? 'vehicles' : 'drivers'
    // let items = localStorage.getItem(keyName) | []
    // console.log('items: ', items)
    // const parsed = JSON.parse(items)
    // parsed.push(data)
    // localStorage.setItem(keyName, parsed)
    // set(prevState => {
    //   let next = [...prevState, data]
    //   return next
    // })
    console.log(keyName)
    history.push('/quote/build-quote')
  }

  const label = type === 'vehicle' ? 'Add this vehicle' : 'Add this driver'

  return (
    <div className={type === 'vehicle' ? 'AddVehicle AddItem' : 'AddDriver AddItem'}>
      <Form onSubmit={handleSubmit} SubmitLabel={label}>
        {children}
      </Form>
    </div>
  )
}

export default AddItem