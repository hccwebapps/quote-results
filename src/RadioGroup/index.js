import React, { useEffect } from 'react'
import classNames from 'classnames'

const RadioGroup = ({ name, choices, value, setValue, defaultValue, smallCopy }) => {

  useEffect(() => {
    if (defaultValue) setValue(name, defaultValue)
  }, []) // eslint-disable-line
  
  const cls = classNames('field-group clearfix', {
    'Four': choices.length === 4,
    'Three': choices.length === 3,
    'Two': choices.length === 2,
  })

  return (
    <div className={cls}>
      {choices && choices.map(ch =>
        <label
          htmlFor={ch[0]}
          key={ch[0]}
          className={ch[0] === defaultValue ? 'NoIncrease' : 'RegularOption'}
        >
          <input
            type="radio"
            name={name}
            checked={value === ch[0]}
            value={value}
            onChange={() => setValue(name, ch[0])}
          />
          <span className="field-label">
            {ch[0] !== defaultValue && smallCopy && <small>{smallCopy}</small>}
            {ch[1]}
          </span>
        </label>  
      )}
    </div>
  )
}

export default RadioGroup