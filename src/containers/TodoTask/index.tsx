import React, { useState } from 'react';
import List from '../../components/List';
// import Button from 'components/Button';
import { Task } from '../../types';

type State = {
  tasks: Array<Task>,
  taskName: string
}
function TodoTask() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [taskName, setTaskName] = useState<string>('');

  function handleEditTask(task: Task, taskName: string): void {
    console.log('TASKS ORIGINAL', tasks);
    const newTask = { ...task, name: taskName };
    const newTasks = tasks.map(t => t.name === task.name ? newTask : t)
    setTasks(newTasks);
  }

  function handleDeleteTask(task: Task): void {
    const newTasks = tasks.filter(t => t !== task);
    setTasks(newTasks);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    setTaskName(e.currentTarget.value);
  }

  function handleSubmit(event: React.SyntheticEvent): void {
    if (taskName) {
      const newTask: Task = {
        name: taskName, 
        editHandler: handleEditTask,
        deleteHandler: handleDeleteTask
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTaskName('');
    }
    event.preventDefault();
  }

  return (
    <>
      <h1>Taks</h1>
      <List tasks={tasks}/>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={taskName} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </>
      )
}

export default TodoTask;