import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store.js'
const { dispatch } = store
const id = x => x

const Decrement = () => {
  const count = useSelector(id)

  return (
    <button className="decrement" onClick={() => dispatch({ type: 'DECREMENT' })}>count is: {count}</button>
  )
}

export default Decrement
