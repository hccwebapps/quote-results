import { useState } from 'react'

const useForm = ({ defaultData }) => {

  const [data, setData] = useState(defaultData || {})

  const setValue = (name, value) => {
    setData(prevState => {
      let next = Object.assign({}, prevState)
      next[name] = value
      return next
    })
  }

  return {
    data,
    setValue,
  }
}

export default useForm