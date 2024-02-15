import React from 'react'
import './Input.scss';

export default function Input(props) {
    var inputType = props.type;
    var name = props.name
    var isTrue = props.isTrue;
    // console.log(isTrue)
    var labelname = props.labelname;
  return (
    <div id="input">
        <input type={inputType} className="input" placeholder={name} />
        {isTrue && <label >{labelname}</label>}
    </div>
  )
}
