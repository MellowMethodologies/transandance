import React from 'react'
import './style/button.css'

function Button(props) {
  return (
    <div id='but'>
        <p>{props.name}</p>
    </div>
  )
}

export default function button() {
  return (
    <Button props={{name:"test"}}/>
  )
}
