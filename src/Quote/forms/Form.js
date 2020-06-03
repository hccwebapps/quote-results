import React, { useState } from 'react'
import Button from 'Button'

import './forms.scss'

export const FormContext = React.createContext()

const Form = ({ children, onSubmit, DefaultValues, SubmitLabel }) => {

  const [data, setData] = useState(DefaultValues || {})

  return (
    <FormContext.Provider value={{ data, setData }}>
      <form onSubmit={e => onSubmit(e, data)}>
        {children}
        <Button Submit className="Large Rounded">
          {SubmitLabel}
        </Button>
      </form>
    </FormContext.Provider>
  )
}

export default Form