import React, { useState } from 'react';
import List from '../../components/List';
// import Button from 'components/Button';
import { Task } from '../../types';

type StateTodoTask = {
  tasks: Array<Task>,
  taskName: string
}

type PropsTodoTask = {};

class TodoTask extends React.Component<PropsTodoTask,StateTodoTask> {
  state: StateTodoTask = {
    tasks: [],
    taskName: ''
  };

  handleEditTask = (task: Task, taskName: string): void => {
    const newTask = { ...task, name: taskName }
    const newTasks = this.state.tasks.map(t => t === task ? newTask : t)
    this.setState({ tasks: newTasks});
  }

  handleDeleteTask = (task: Task): void => {
    const newTasks = this.state.tasks.filter(t => t !== task);
    this.setState({ tasks: newTasks});
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ taskName: e.currentTarget.value });
  };

  handleSubmit = (event: React.SyntheticEvent): void => {
    const taskName = this.state.taskName;
    if (taskName) {
      const newTask: Task = {
        name: taskName, 
        editHandler: this.handleEditTask.bind(this),
        deleteHandler: this.handleDeleteTask.bind(this)
      };

      const newTasks = [...this.state.tasks, newTask];
      this.setState({ tasks: newTasks, taskName: '' });
    }
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h1>Taks</h1>
        <List tasks={this.state.tasks}/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.taskName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default TodoTask;