import React from 'react';
import TaskRow from '../TaskRow'
import { Task } from '../../types';

type ListProps = {
  tasks: Array<Task>
}

function List({ tasks }: ListProps) {

  const listItems = tasks.map((task: Task) =>  <TaskRow name={task.name} />);
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default List;
