import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import Button from 'Button'

import './style.scss'

const Modal = ({ modalActive, setModalActive }) => {

  const history = useHistory()

  const [closing, setClosing] = useState(false)

  const cls = classNames('Modal', {
    'Active': modalActive,
    'Closing': closing,
  })

  const close = () => {
    setClosing(true)
    setTimeout(() => {
      setModalActive(false)
    }, 1000)
  }


  const proceed = e => {
    setClosing(true)
    setTimeout(() => {
      setModalActive(false)
      history.push('/offline-received')
    }, 1000)
  }

  const cancel = e => {
    e.preventDefault()
    close()
  }

  return (
    <div className={cls}>
      <div className="ModalBackground" />
      <div className="ModalBody">
        <h4>You haven't modified your Optional Benefits</h4>
        <Button className="Large Rounded" onClick={cancel}>
          Modify Benefits
        </Button>
        <Button className="Large Rounded Primary" onClick={proceed}>
          Continue
        </Button>
      </div>
    </div>
  )
}

export default Modal