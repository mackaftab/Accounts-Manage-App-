import React from 'react'
import Detail from '../Detail/Detail'

const Main = (props) => {
  return (
    <div>
      <h2>{props.name ? `Welcome - ${props.name}` : ""}</h2>
      <Detail name={props.name}/>
    </div>
  )
}

export default Main
