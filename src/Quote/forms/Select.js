import React, { useContext } from 'react'
import { FormContext } from 'Quote/forms/Form'

const Text = ({ choices, name, label, helpCopy, Third }) => {

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
    <div className={Third ? 'field-wrapper third' : 'field-wrapper'}>
      <label htmlFor={name}>
        {label}
      </label>
      <div className="select-wrapper">
        <select
          name={name}
          value={data[name] || ''}
          onChange={change}
        >
          <option>Select…</option>
          {choices && choices.map(ch =>
            <option key={ch[0]} value={ch[0]}>{ch[1]}</option>  
          )}
        </select>
        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.257 404.257"><path d="M386.257 114.331L202.128 252.427 18 114.331l-18 24 202.128 151.596 202.129-151.596z" /></svg>
      </div>
      {helpCopy && (
        <small className="help-copy">
          {helpCopy}
        </small>
      )}
    </div>
  )
}

export default Text