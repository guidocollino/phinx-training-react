import React from 'react';

type Props = {
  label: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function Button({ label, onClick}: Props) {

  return (
  <button onClick={onClick}>{ label }</button>
  )
}

export default Button;
