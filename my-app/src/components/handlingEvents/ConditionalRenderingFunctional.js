import React from 'react'

function ConditionalRenderingFunctional(props) {
  return (
    <div>
        <h1>{props.connected ? 'Connected' : 'Not Connected'}</h1>
    </div>
  )
}
//<!-- this is saying if props.connected is true render the string connected, otherwise render not connected. -->

export default ConditionalRenderingFunctional