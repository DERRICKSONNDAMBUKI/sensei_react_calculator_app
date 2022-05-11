import './Button.css'

import React from 'react'

export const Button = ({className, value,onClick}) => {
  return (
    <button className={className} onClick = {onClick}>
        {value}
    </button>
  )
}
