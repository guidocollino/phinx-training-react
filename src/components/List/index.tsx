import React from 'react';
import TaskRow from '../TaskRow'
import { Task } from '../../types';

type Props = {
  tasks: Array<Task>
}

function List({ tasks }: Props) {

  const listItems = tasks.map((task: Task, index) =>  <li key={index}><TaskRow task={task} /></li>);
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default List;
