import React from 'react';

type TaskRowProps = {
  name: string
}

function TaskRow({ name }: TaskRowProps) {
  return (
   <li>{name}</li>
  )
}

export default TaskRow;
