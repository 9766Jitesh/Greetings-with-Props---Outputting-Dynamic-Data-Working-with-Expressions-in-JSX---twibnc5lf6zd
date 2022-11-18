import React, { Children } from 'react'

export default function Welcome(props) {
  let greetMsg='Welcome to Newton School.';
  return (
    <div>
      <h1>Hey {props.name}!.</h1>
      <h2>{greetMsg}</h2>
    </div>
  )
}
