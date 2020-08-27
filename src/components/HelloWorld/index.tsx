import React from 'react';

function HelloWorld(props: { name: React.ReactNode; }) {
  return (
  <div className="HelloWorld">Hello {props.name}</div>
  );
}

export default HelloWorld;