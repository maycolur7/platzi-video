import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'

function Related (props) {
  return (
    <div className="Related">
      <img className="Related-logo" src={logo} alt="platzi-logo" width={250}/>
    </div>
  )
}

export default Related