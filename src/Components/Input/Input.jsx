import React from 'react'
import './Input.scss';

export default function Input(props) {
    var inputType = props.type;
    var name = props.name
  return (
    <div id="input">
        <input type={inputType} className="input" placeholder={name} />
    </div>
  )
}
