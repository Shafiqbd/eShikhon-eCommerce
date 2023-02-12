import React from 'react'
import CustInput from '../CustInput'

export default function Login() {
  return (
    <div>
      <h1> User Login</h1>
      <CustInput type="text" label="Email" size='small' isRequired={true} placeholder="Enter email address" />
    </div>
  )
}
