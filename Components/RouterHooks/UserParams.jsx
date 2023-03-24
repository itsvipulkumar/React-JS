import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function UserParams() {
  const { name } = useParams();
  const location = useLocation();
  return (

    <>
      <h1>Hello users {name}</h1>
      <h4>my current location is {location.pathname}</h4>
    </>
  )
}
