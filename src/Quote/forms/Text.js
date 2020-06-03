import React, { useContext } from 'react'
import { FormContext } from 'Quote/forms/Form'

const Text = ({ name, label, helpCopy }) => {

  const { data, setData } = useContext(FormContext) 

  const change = e => {
    const { value } = e.target
    setData(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = value
      return next
    })
  }

  return (
    <div className="field-wrapper">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={data[name] || ''}
        onChange={change}
      />
      {helpCopy && (
        <small className="help-copy">
          {helpCopy}
        </small>
      )}
    </div>
  )
}

export default Text