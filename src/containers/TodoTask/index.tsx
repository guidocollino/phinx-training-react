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

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ taskName: e.currentTarget.value });
  };

  handleSubmit = (event: React.SyntheticEvent): void => {
    const taskName = this.state.taskName;
    if (taskName) {
      const newTask: Task = {name: this.state.taskName, status: "PENDING"};
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