import React from 'react'
import classNames from 'classnames'

import './style.scss'

const Button = ({ children, className }) => {

  const cls = classNames('Button', {
    [className]: className,
  })

  return (
    <button className={cls}>
      {children}
    </button>
  )
}

export default Button