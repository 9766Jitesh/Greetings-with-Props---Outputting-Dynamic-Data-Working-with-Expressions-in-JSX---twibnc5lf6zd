import React, { Children } from 'react'

export default function Welcome(props) {
  return (
    <div>
      <h1>Hey ! {props.name}</h1>
      <h2>{props.children} </h2>
    </div>
  )
}
