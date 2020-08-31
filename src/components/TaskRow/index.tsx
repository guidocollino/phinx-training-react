import React from 'react';
import Button from 'components/Button';
import Editable from 'components/Editable';
import { Task } from '../../types';

type Props = {
  task: Task
}

function TaskRow({ task }: Props) {
  return (
    <>
      <Editable text={task.name} type={'text'} placeHolder='TaskName'>
        <input
          type="text"
          name="task"
          placeholder="Write a task name"
          value={task.name}
          onChange={e => task.editHandler(task, e.target.value)}
        />
      </Editable>
      <Button label={'X'} onClick={() => task.deleteHandler(task)} />
    </>
  )
}

export default TaskRow;
