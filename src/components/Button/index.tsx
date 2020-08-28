import React from 'react';

type ButtonProps = {
  label: string,
  onClick: Function
}

function Button({ label, onClick}: ButtonProps) {

  return (
  <button onClick={onClick()}>{ label }</button>
  )
}

export default Button;
