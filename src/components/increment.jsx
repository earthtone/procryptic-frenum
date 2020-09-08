import React from 'react'
import { connect } from 'react-redux'
import store from '../store.js'
const { dispatch } = store

const Increment = ({ count }) => (
  <button className="increment" onClick={() => dispatch({ type: 'INCREMENT' })}>count is: {count}</button>
)

function mapStateToProps (state) {
  return {
    count: state
  }
}

export default connect(mapStateToProps)(Increment)
