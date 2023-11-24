import React from 'react'
const Input = (props) => {
  return (
    <input type={props.type}
    className={props.className}
    value={props.value}
    id={props.id}
    onChange={props.onChange}
    />
  )
}

export default Input
