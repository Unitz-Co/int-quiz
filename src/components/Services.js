import React from 'react'

export default function Services(props) {

  const text = props.services.map(service => 
    service.name).join(', ')


  return (
    <span className={text != null && text != "" ? '' : "update"}>
      {text != null && text !== '' ? text : 'updating...'}
    </span>
  )
}
