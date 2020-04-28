import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './style.scss'

const Button = ({ children, className, onClick, to, Submit }) => {

  const cls = classNames('Button', {
    [className]: className,
    'Link': to,
    'Submit': Submit,
  })

  if (to) {
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button className={cls} onClick={onClick}>
        {children}
      </button>
    )
  }

  if (Submit) {
    return (
      <input type="submit" className={cls} onClick={onClick} value={children} />
    )
  }

  return (
    'You did not pass "to", "onClick" or "Submit"!'
  )

}

export default Button