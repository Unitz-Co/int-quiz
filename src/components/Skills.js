import React from 'react'

export default function Skills(props) {
  const text = props.skills.map(skill => skill.displayName).join(', ')

  return (
    <span className={text != null && text != "" ? '' : "update"}>
      {text != null && text !== '' ? text : 'updating...'}
    </span>
  )
}