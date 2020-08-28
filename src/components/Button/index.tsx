import React from 'react';

type ButtonProps = {
  label: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function Button({ label, onClick}: ButtonProps) {

  return (
  <button onClick={onClick}>{ label }</button>
  )
}

export default Button;
