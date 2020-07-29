import React from 'react';

const FormField = props => {
  return (
    <div>
      <label>
        {props.label}
        <input type={props.type} name={props.name} onChange={props.onChange} value={props.value} />
      </label>
    </div>
  )
}

export default FormField;